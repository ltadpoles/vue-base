import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../views/layout/index.vue'
import { useUserStore } from '../stores/modules/user'
import userRoute from './modules/user'
import aboutRoute from './modules/about'

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
        }
      ]
    },
    ...userRoute,
    ...aboutRoute,
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/passport/login.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.saveSrollTop) {
          const top = document.documentElement.scrollTop || document.body.scrollTop
          resolve({ left: 0, top })
        }
      }
    })
  }
})

router.beforeEach(async (to, from) => {
  if (to.path !== '/login') {
    // 页面跳转验证token
    // const userStore = useUserStore()
    // const token = userStore.token.token
    // if (!token) {
    //   router.replace('/login')
    //   return false
    // }
  }
  return true
})

export default router
