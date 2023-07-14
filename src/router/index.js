import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/passport/login.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/layout'
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('@/views/index/index.vue')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 }
  }
})

export default router
