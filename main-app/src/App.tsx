import { ApolloProvider } from '@apollo/client'
import React from 'react'
import './App.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Router from './router'
import gqlClient from './graphql/client'
import 'dayjs/locale/zh-cn'
import 'moment/dist/locale/zh-cn'
import { I18NContextWrapper } from './i18n/context'

function App() {
  return (
    <div className="App">
      <ApolloProvider client={gqlClient}>
        <ConfigProvider locale={zhCN}>
          <I18NContextWrapper>
            <Router />
          </I18NContextWrapper>
        </ConfigProvider>
      </ApolloProvider>
    </div>
  )
}

export default App
