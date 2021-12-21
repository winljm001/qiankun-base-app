import React, { useMemo, useState, memo, useEffect } from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import { getCurrentRouteAndMenuInfo, getMenuList } from '@/utils/route'
import mainRoutes from '@/router/config/main-routes'
import authHOC from '@/components/hoc/auth'
import usePermissions from '@/stores/permissions'
import { CustomRouteConfig } from '@/router/config'
import { LOGIN_PATH, REDIRECT } from '@/router/config/basePath'
import styles from './style.module.less'
import SideMenu from './components/side-menu'
import AppBreadcrumb from './components/breadcrubm'
import AppHeader from './components/header'
import useCommonLayout from './useCommonLayout'
const { Header, Content, Sider } = Layout

function hideMenuWithoutChildren(menus: CustomRouteConfig[]) {
  return menus.filter(menu => {
    if (menu.routes && menu.routes.length === 0) {
      return false
    }
    return true
  })
}

const LayoutComponent: React.FC<RouteConfigComponentProps> = memo(props => {
  const { route } = props
  const location = useLocation()
  const { menuShown } = useCommonLayout()
  const { permissions } = usePermissions()
  const history = useHistory()
  useEffect(() => {
    const unRejester = history.listen(route => {
      if ([LOGIN_PATH, REDIRECT].includes(route.pathname)) {
        return
      }
      sessionStorage.setItem('CURRENT_PATH', `${route.pathname}${route.search}`)
    })
    return () => {
      unRejester()
    }
  }, [history])
  // 根据pathname获取当前匹配到的路由配置、菜单配置、菜单展开的key
  const [matchedRouteConfig, matchedMenuConfig, matchedOpenKeys] =
    useMemo(() => {
      return getCurrentRouteAndMenuInfo(location.pathname)
    }, [location.pathname])
  const [openKeys, setOpenKeys] = useState<any[]>(matchedOpenKeys)
  // 页面主体padding（默认16px）
  const contentPadding = matchedRouteConfig?.meta?.contentPadding
  return (
    <Layout className={styles.layout}>
      {/* 顶部header */}
      <Header className={styles.header}>
        <AppHeader />
      </Header>
      <Layout>
        {/* 左侧菜单栏 */}
        <Sider collapsed={!menuShown} trigger={null} collapsible width={208}>
          <SideMenu
            menuList={hideMenuWithoutChildren(
              getMenuList(mainRoutes, permissions),
            )}
            selectedKeys={[matchedMenuConfig?.meta?.title]}
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
          />
        </Sider>
        <Layout>
          {/* 面包屑 */}
          <AppBreadcrumb route={matchedRouteConfig} />
          {/* 页面主体 */}
          <Content
            className={styles.content}
            style={{
              padding: contentPadding === undefined ? 16 : contentPadding,
            }}>
            {renderRoutes(route?.routes)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
})

export default authHOC(LayoutComponent)
