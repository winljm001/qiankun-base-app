import React, { useEffect } from 'react'
import { Modal } from 'antd'
import { useHistory } from 'react-router'
import config from '@/config'
import usePermissions from '@/stores/permissions'
import { LOGIN_PATH } from '@/router/config/basePath'

const { authorization } = config

/**
 * 若系统需要鉴权，这执行鉴权逻辑（组件需要鉴权时使用）
 * @param Component 需要鉴权的组件
 */
function auth<T extends object>(Component: React.FC<T>): React.FC<T> {
  return props => {
    const history = useHistory()
    const { token } = usePermissions()
    useEffect(() => {
      if (authorization && !token) {
        Modal.info({
          title: '系统提示',
          content: '您尚未登录',
          okText: '知道了',
          onOk() {
            history.push(LOGIN_PATH)
          },
        })
      }
    }, [history, token])
    return <Component {...props} />
  }
}

export default auth
