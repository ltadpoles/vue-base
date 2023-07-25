import router from './index'

/**
 * @description 每次导航之前被执行。返回一个用来移除该钩子的函数
 */
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

/**
 * @description 每次导航之后被执行。返回一个用来移除该钩子的函数
 */
router.afterEach((to, from) => {})

/**
 * @description 每次导航遇到未被捕获的错误出现时被调用
 */
router.onError(error => {})
