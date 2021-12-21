import React, { CSSProperties } from 'react'
import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'
import * as Icons from '@ant-design/icons/lib/icons'
import { Redirect } from 'react-router-dom'
import Layouts from '@/layouts/common-layout/index'
import { BreadcrumbItem } from '@/layouts/common-layout/components/breadcrubm'
import InitPage from '@/pages/others/redirect'
import { REDIRECT } from './basePath'
import modules from './main-routes'
export interface CustomRouteConfig extends RouteConfig {
  /** 面包屑配置 */
  breadcrumb?: BreadcrumbItem[]
  /** 权限 */
  authKey?: string
  /** 页面信息配置 */
  meta?: {
    /** 系统左侧菜单栏文案（为空或未配置则不会出现在菜单栏） */
    title?: string
    /** 菜单按钮 */
    icon?: keyof typeof Icons
    /** 主内容区域padding（默认16px） */
    contentPadding?: CSSProperties['padding']
    /** 是否隐藏菜单，默认隐藏 */
    hiddenInMenu?: boolean
  }
  /** 子路由 */
  routes?: CustomRouteConfig[]
}

export const mainRoutes: CustomRouteConfig[] = [...modules]

export const noAuthRoutes: CustomRouteConfig[] = [
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('@/pages/others/login')),
  },
  {
    path: REDIRECT,
    exact: true,
    component: InitPage,
  },
  {
    path: '/',
    exact: true,
    render: () => <Redirect to={REDIRECT} />,
  },
  {
    path: '*',
    render: () => <Redirect to={REDIRECT} />,
  },
]
// 登录后或者鉴权过后使用的静态路由（实际可能只使用部分路由）
const routes: CustomRouteConfig[] = [
  {
    path: REDIRECT,
    exact: true,
    component: InitPage,
  },
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('@/pages/others/login')),
  },
  {
    path: '/',
    component: Layouts,
    routes: [...mainRoutes],
  },
  {
    path: '*',
    component: loadable(() => import('@/pages/others/404/index')),
  },
]
export default routes
