import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Layout,
      children: [
        {
          path: '',
          name: 'DashboardIndex',
          component: () => import('@/views/dashboard/index.vue')
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: Layout,
      children: [
        {
          path: 'about',
          name: 'UserList',
          component: () => import('@/views/user/about.vue')
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

export default router
