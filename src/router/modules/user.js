const routes = [
  {
    path: '/user',
    name: 'User',
    meta: { title: '用户管理' },
    redirect: '/user/list',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'list',
        name: 'UserList',
        meta: { title: '用户列表' }
      },
      {
        path: 'lock',
        name: 'UserLock',
        meta: { title: '用户权限' }
      },
      {
        path: 'aim',
        name: 'UserAim',
        meta: { title: '用户角色' }
      }
    ]
  }
]

export default routes
