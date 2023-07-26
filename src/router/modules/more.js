const routes = [
  {
    path: '/more',
    name: 'More',
    meta: { title: '多级导航' },
    redirect: '/more/list',
    comments: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'list',
        name: 'MoreList',
        meta: { title: '多级列表' },
        comments: () => import('@/views/more/list.vue')
      },
      {
        path: 'two',
        name: 'MoreTwo',
        meta: { title: '多级二层' },
        children: [
          {
            path: 'list',
            name: 'MoreTwoList',
            meta: { title: '二层列表' },
            component: () => import('@/views/more/two/list')
          }
        ]
      }
    ]
  }
]

export default routes
