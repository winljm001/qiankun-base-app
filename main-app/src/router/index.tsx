import React, { useMemo } from 'react'
import { Router } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { createBrowserHistory } from 'history'
import { getRoutesWithPermissions } from '@/utils/route'
import usePermissions from '@/stores/permissions'
import routes, { noAuthRoutes } from './config'

export const history = createBrowserHistory({})
const AppRouter = () => {
  const { permissions } = usePermissions()
  const authRoutes = useMemo(() => {
    if (!permissions.length) {
      return noAuthRoutes
    }
    return getRoutesWithPermissions(routes, permissions)
  }, [permissions])
  return <Router history={history}>{renderRoutes(authRoutes)}</Router>
}

export default AppRouter
