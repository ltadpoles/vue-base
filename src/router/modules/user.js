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
        meta: { title: '用户列表' },
        component: () => import('@/views/user/list.vue')
      },
      {
        path: 'lock',
        name: 'UserLock',
        meta: { title: '用户权限' },
        component: () => import('@/views/user/lock.vue')
      },
      {
        path: 'aim',
        name: 'UserAim',
        meta: { title: '用户角色' },
        component: () => import('@/views/user/aim.vue')
      },
      {
        path: 'info',
        name: 'UserInfo',
        meta: { title: '用户详情' },
        component: () => import('@/views/user/info.vue')
      }
    ]
  }
]

export default routes
