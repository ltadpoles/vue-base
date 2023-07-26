const route = [
  {
    path: '/',
    meta: { title: '首页' },
    name: 'Index',
    redirect: '/dashboard',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
]

export default route
