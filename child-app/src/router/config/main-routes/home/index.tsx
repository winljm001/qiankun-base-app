import loadable from '@loadable/component'
import { CustomRouteConfig } from '../..'
import { HOME } from './path'

const routes: CustomRouteConfig = {
  path: HOME,
  component: loadable(() => import('@/pages/home')),
  exact: true,
  authKey: 'homePage',
  meta: {
    title: 'home',
    icon: 'DashboardOutlined',
    hiddenInMenu: false,
  },
  breadcrumb: [{ name: 'home' }],
}

export default routes
