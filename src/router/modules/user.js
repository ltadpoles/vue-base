const routes = [
  {
    path: '/user',
    name: 'User',
    meta: { title: '用户管理' },
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'sec',
        name: 'UserSec',
        meta: { title: '二级' },
        children: [
          {
            path: 'about',
            name: 'UserSecAbout',
            meta: { title: '三级' },
            component: () => import('@/views/user/about.vue')
          }
        ]
      },
      {
        path: 'two',
        name: 'UserTwo',
        meta: { title: '二级1号' },
        children: [
          {
            path: 'about1',
            name: 'UserTwoAbout1',
            meta: { title: '三级1号' },
            component: () => import('@/views/user/about1.vue')
          }
        ]
      }
    ]
  }
]

export default routes
