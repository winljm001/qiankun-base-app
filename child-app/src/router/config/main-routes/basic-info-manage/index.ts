import loadable from '@loadable/component'
import BlankLayout from '@/layouts/blank-layout'
import {
  CUSTOMER,
  CUSTOMER_DETAIL,
  CUSTOMER_EDIT,
  LICENSE,
  LICENSE_DETAIL,
  MODULE_INDEX,
  SOP,
} from './path'
import { CustomRouteConfig } from './../../index'

const routes: CustomRouteConfig = {
  path: MODULE_INDEX,
  component: BlankLayout,
  authKey: 'basicInformationManagement',
  meta: {
    title: 'basicInformationManagement',
    icon: 'FormOutlined',
    hiddenInMenu: false,
  },
  breadcrumb: [{ name: 'basicInformationManagement' }],
  routes: [
    {
      path: SOP,
      component: loadable(() => import('@/pages/basic-info-manage/sop/list')),
      meta: {
        title: 'SOPManagement',
      },
      exact: true,
      breadcrumb: [
        { name: 'basicInformationManagement' },
        { name: 'SOPManagement' },
      ],
    },

    // 许可核销
    {
      path: LICENSE,
      component: loadable(
        () => import('@/pages/basic-info-manage/license/list'),
      ),
      meta: {
        title: 'licenseManagement',
      },
      exact: true,
      breadcrumb: [
        { name: 'basicInformationManagement' },
        { name: 'licenseManagement' },
      ],
    },
    {
      path: LICENSE_DETAIL,
      component: loadable(
        () => import('@/pages/basic-info-manage/license/detail'),
      ),
      meta: {
        title: 'licenseManagement',
        hiddenInMenu: true,
      },
      exact: true,
      breadcrumb: [
        { name: 'basicInformationManagement' },
        { name: 'licenseManagement', path: LICENSE },
        { name: '许可详情' },
      ],
    },

    // 客户管理
    {
      path: CUSTOMER,
      component: loadable(
        () => import('@/pages/basic-info-manage/customer/list'),
      ),
      meta: {
        title: 'customerManagement',
      },
      exact: true,
      breadcrumb: [
        { name: 'basicInformationManagement' },
        { name: 'customerManagement' },
      ],
    },
    {
      path: CUSTOMER_EDIT,
      component: loadable(
        () => import('@/pages/basic-info-manage/customer/edit'),
      ),
      meta: {
        title: 'licenseManagement',
        hiddenInMenu: true,
      },
      exact: true,
      breadcrumb: [
        { name: 'basicInformationManagement' },
        { name: 'customerManagement', path: CUSTOMER },
        { name: '客户编辑' },
      ],
    },
    {
      path: CUSTOMER_DETAIL,
      component: loadable(
        () => import('@/pages/basic-info-manage/customer/detail'),
      ),
      meta: {
        title: 'licenseManagement',
        hiddenInMenu: true,
      },
      exact: true,
      breadcrumb: [
        { name: 'basicInformationManagement' },
        { name: 'customerManagement', path: CUSTOMER },
        { name: '客户详情' },
      ],
    },
  ],
}

export default routes
