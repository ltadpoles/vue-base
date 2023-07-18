import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import { useCounterStore } from '../stores/counter'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: '首页' },
          component: () => import('@/views/dashboard/index.vue')
        },
        {
          path: 'more',
          name: 'More',
          meta: { title: '多层' },
          children: [
            {
              path: 'list',
              name: 'MoreList',
              meta: { title: '列表' },
              component: () => import('@/views/more/list.vue')
            }
          ]
        },
        {
          path: 'user',
          name: 'User',
          meta: { title: '用户管理' },
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
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/passport/login.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 }
  }
})

router.beforeEach(async (to, from) => {
  if (to.path !== '/login') {
    // 页面跳转验证token
    // const counter = useCounterStore()
    // if (!counter.getToken.token) {
    //   router.replace('/login')
    //   return false
    // }
  }
  return true
})

export default router
