/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal } from 'antd'
import mainRoutes from '@/router/config/main-routes'
import { getHomepageUrl } from '@/utils/route'
import usePermissions from '@/stores/permissions'
import { LOGIN_PATH } from '@/router/config/basePath'

const RedirectPage: React.FC = () => {
  const history = useHistory()
  const [isMount, setIsMount] = useState(false)
  const { permissions, token } = usePermissions()
  // 确保只执行一次
  useEffect(() => {
    if (!isMount) {
      setIsMount(true)
      return
    }
    if (!token) {
      // 未登录
      history.replace(LOGIN_PATH)
    } else if (!permissions.length) {
      // 已登录但用户无权限
      Modal.info({
        title: '系统提示',
        content: '暂无访问权限',
        okText: '知道了',
        onOk() {
          history.push(LOGIN_PATH)
        },
      })
    } else {
      // 登录且至少存在一个路由权限
      let currentPath = sessionStorage.getItem('CURRENT_PATH')
      if (!currentPath) {
        currentPath = getHomepageUrl(mainRoutes) as string
      }
      history.push(currentPath)
    }
  }, [permissions, token, isMount])

  return null
}
export default RedirectPage
