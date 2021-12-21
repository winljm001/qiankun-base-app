/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Select } from 'antd'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { GlobalOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { useQueryParam } from 'wbd-frontend-kit'
import images from '@/assets/images'
import { useI18n } from '@/i18n/context'
import { selectFilterOption } from '@/utils'
import usePermissions from '@/stores/permissions'
import { HOME } from '@/router/config/main-routes/home/path'
import { useLoginMutation } from '@/graphql/gqls/login/__generated__/login.generated'
import useUser from '@/stores/user'
import styles from './style.module.less'

const { Option } = Select

const Login: React.FC = () => {
  const { I18N, setLangTriggerRender } = useI18n()
  const { fetchPermissions, setToken, token } = usePermissions()
  const { setUpdatePassword } = useUser()
  const [loginMutation, { loading }] = useLoginMutation()
  const history = useHistory()
  const location = useLocation()
  const redirect = useQueryParam(location.search, 'redirect')

  const onLogin = async (values: any) => {
    try {
      // 登录
      const res = await loginMutation({
        variables: {
          input: {
            userAccount: values.username,
            password: values.password,
          },
        },
      })
      const data = res?.data?.login
      // 设置token
      setToken(data?.token)
      setUpdatePassword(data?.needUpdatePassword)
      // 请求权限
      await fetchPermissions()
      // 跳转到首页
      if (redirect) {
        history.push(redirect)
      } else {
        history.push(HOME)
      }
    } catch (error) {}
  }

  useEffect(() => {
    if (token) {
      history.push(HOME)
    }
  }, [])
  const langs = I18N.langs
  return (
    <div className={styles.login}>
      <div className={styles.bg}>
        <div className={styles.sloganBox}>
          <div className={styles.slogan}>{I18N.login.slogan}</div>
          <div className={styles.sloganEn}>{I18N.login.sloganEn}</div>
        </div>
      </div>
      <div className={styles.loginBox}>
        <img src={images.AppNewLogo} alt="" className={styles.logo} />
        <h3 className={styles.title}>洪九全球供应链管理系统</h3>
        <div className={styles.formBox}>
          <div className={styles.lang}>
            <GlobalOutlined className={styles.langIcon} />
            <Select
              showSearch
              filterOption={selectFilterOption}
              value={I18N.currentLang}
              bordered={false}
              onChange={data => {
                setLangTriggerRender(data)
              }}>
              {langs.map((v, i) => (
                <Option value={v.value} key={i}>
                  {v.label}
                </Option>
              ))}
            </Select>
          </div>
          <Form
            name="basic"
            initialValues={{ username: '', password: '' }}
            onFinish={onLogin}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input
                placeholder="请输入用户名"
                size="large"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}>
              <Input.Password
                placeholder="请输入密码"
                size="large"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className={styles.btn}>
                {I18N.login.login}
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.record}>{I18N.login.record}</div>
      </div>
    </div>
  )
}

export default Login
