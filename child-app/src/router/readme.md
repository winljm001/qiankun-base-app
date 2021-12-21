## 权限路由的实现逻辑

### 登录

1. 登录成功后后端返回 token 并且发起请求权限列表（功能点权限），完成后，跳转到`REDIRECT`重定向页面
2. 与此同时，根路由会根据权限列表选择渲染权限路由列表/非权限列表（两种列表有交叉）
3. 重定向页`@/pages/others/redirect`会根据当前用户是否登录以及是否有权限列表选择跳转到登录页或者上次访问页/权限路由的第一个可访问页

### 退出登录

1. 清空存储在`zustand`和`localStorage`中的`token`和权限列表
2. 此时根路由由于没有权限会挂载非权限路由，由于当前的路由无法匹配到非权限路由的任何一个路由，因此会匹配到

```js
  {
    path: '*',
    render: () => <Redirect to={REDIRECT} />,
  },
```

然后跳转到重定向页 逻辑判断后跳转到登录页

### 使用过程中 token 过期

graphql 响应拦截会处理此种情况，具体处理逻辑如下：

```js
if ([401, 601].includes(code)) {
  const hasToken = !!permissionStore.getState().token
  // 过滤掉无token导致的鉴权失败（由路由拦截处理）
  if (!loginModalIsShown && hasToken) {
    loginModalIsShown = true
    Modal.warning({
      title: '系统提示',
      content: '登录状态已失效，请重新登录',
      onOk() {
        loginModalIsShown = false
        sessionStorage.removeItem('CURRENT_PATH')
        // 清空token
        permissionStore.getState().clear()
      },
      okText: '确定',
    })
  }
}
```

如果后端返回`401/601`状态码时，判断用户是否有本地 token，如果有的话，就会弹出一个单例提示框，用户确定后，执行和退出登录一样的逻辑

### 切换路由中 token/permission 被清空

此种情况会会由`authHOC`进行拦截，如果用户手动的清空了 token/permission，则会弹出框，用户确认后跳转到登录页登录后使用

### 使用过程中由于需要登录记录上次访问路由

在加载业务页面后，`CommonLayout`布局组件会开启路由监听

```js
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
```

该记录的路由会在重定向页里面使用
