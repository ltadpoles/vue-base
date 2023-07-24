const routes = [
  {
    path: '/about',
    name: 'About',
    comments: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'AboutIndex',
        comments: () => import('@/views/user/about.vue')
      }
    ]
  }
]

export default routes
