import { matchPath } from 'react-router-dom'
import allRoutes, { CustomRouteConfig } from '@/router/config'
import usePermissions from '@/stores/permissions'
// import usePermissions from '@/stores/permissions'

/**
 * 根据路由配置和权限数据获取菜单配置
 * @param routes 路由配置
 * @param authData 权限数据
 */
export const getMenuList = (
  routes: CustomRouteConfig[],
  authData: string[],
): CustomRouteConfig[] => {
  const menus =
    routes
      ?.filter(({ meta, authKey }) => {
        // 如果手动设置了隐藏或者未设置
        if (meta?.hiddenInMenu) {
          return false
        }
        // 如果路由配置了authKey（有权限）
        if (authKey && authData.includes(authKey)) {
          // 如果拥有权限
          return true
        }
        // 无配置权限
        if (!authKey && !meta?.hiddenInMenu) {
          return true
        }
        return false
      })
      .map(item => ({
        ...item,
        // 递归处理
        routes: getMenuList(item.routes, authData),
      })) || null
  return menus
}

/**
 * 从菜单中获取默认首页路由（第一个可选菜单项目）
 * @param menuList 菜单列表
 */
export const getHomepageUrl = (routes: CustomRouteConfig[]) => {
  const permissions = usePermissions.getState().permissions
  const menus = getMenuList(routes, permissions)
  let firstMenu = menus[0]
  while (firstMenu.routes && firstMenu.routes.length > 0) {
    firstMenu = firstMenu.routes[0]
  }
  return firstMenu.path
}
/**
 * 根据pathname匹配路由和菜单
 * @param pathname location.pathname
 * @returns 获取当前路由及菜单信息
 */
export const getCurrentRouteAndMenuInfo = (
  pathname: string,
): [CustomRouteConfig, CustomRouteConfig, string[]] => {
  let currentRoute: CustomRouteConfig = null
  let currentMenu: CustomRouteConfig = null
  let openKeys: string[] = []
  const traverse = (menu: CustomRouteConfig[]) => {
    for (let i = 0; i <= menu?.length - 1; i++) {
      const route = menu[i]
      // exact需要为true
      const matchedRoute = matchPath(pathname, { ...route, exact: true })
      if (matchedRoute) {
        currentRoute = route
        if (route.meta?.title) {
          currentMenu = route
        }
        return true
      } else {
        if (route.routes?.length) {
          const subResult = traverse(route.routes)
          // 如果子路由被匹配到
          if (subResult) {
            // 如果已获取到当前菜单项则将父菜单的title存储到openKeys
            if (currentMenu) {
              route.meta?.title && openKeys.push(route.meta.title)
            }
            // 如果尚未获取到当前菜单项，则判断当前路由是否有title，若有则将route设置为当前菜单项
            if (!currentMenu) {
              route.meta?.title && (currentMenu = route)
            }
            return true
          }
        }
      }
    }
    return false
  }
  traverse(allRoutes)
  return [currentRoute, currentMenu, openKeys]
}

/**
 * 获取权限情况下的路由配置
 * @param routes 静态路由配置
 * @param permissions 当前用户的权限列表
 */
export function getRoutesWithPermissions(
  routes: CustomRouteConfig[],
  permissions: string[],
) {
  if (!routes.length || !permissions.length) {
    return []
  }
  const result = []
  function routesLoop(routeWithSubRoute: CustomRouteConfig) {
    const temp = []
    for (const currentRoute of routeWithSubRoute.routes) {
      if (currentRoute.authKey && permissions.includes(currentRoute.authKey)) {
        temp.push(currentRoute)
      } else if (currentRoute.routes && currentRoute.routes.length > 0) {
        const node = routesLoop(currentRoute)
        if (node) {
          temp.push(node)
        }
      }
    }
    // 叶节点有值
    if (temp.length) {
      return {
        ...routeWithSubRoute,
        routes: temp,
      }
    }
    // 叶节点无可用值
    return null
  }
  // 遍历一级节点
  for (const route of routes) {
    if (route.routes) {
      const temp = routesLoop(route)
      if (temp) {
        result.push(temp)
      }
    } else {
      result.push(route)
    }
  }
  return result
}
