import router from './index'
import { ROUTER_WHITE_LIST, LOGIN_URL } from '../config'
import { useAuthStore } from '../stores/modules/auth'
import { useUserStore } from '../stores/modules/user'
import { RESETSTORE } from '../stores/reset'

/**
 * @description 每次导航之前被执行。返回一个用来移除该钩子的函数
 */
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  if (to.path === LOGIN_URL) {
    // 如果存在 token 不能返回登录页面
    if (userStore.token.token) return next(from.fullPath)
    else return next()
  }

  // 如果跳转地址是白名单地址，直接跳转
  if (ROUTER_WHITE_LIST.includes(to.path)) return next()

  // 如果没有 token 跳转到登录页面并且携带当前页面路径
  if (!userStore.token.token) {
    return next({ path: LOGIN_URL, query: { redirect: to.fullPath } })
  }

  const authStore = useAuthStore()

  if (!authStore.menu || !authStore.menu.length) {
    await asyncRoute()
    return next({ ...to, replace: true })
  }
  // 页面跳转验证token
  // const userStore = useUserStore()
  // const token = userStore.token.token
  // if (!token) {
  //   router.replace('/login')
  //   return false
  // }
  // }
  // return true
  next()
})

/**
 * @description 每次导航之后被执行。返回一个用来移除该钩子的函数
 */
router.afterEach((to, from) => {})

/**
 * @description 每次导航遇到未被捕获的错误出现时被调用
 */
router.onError(error => {})

/**
 * @description 异步路由
 */

const asyncRoute = async () => {
  const userStore = useUserStore()
  const authStore = useAuthStore()
  // 获取用户信息
  await userStore.getInfoAction()

  const modules = import.meta.glob('./modules/*.js', { eager: true })
  const allAsyncRoutes = []
  for (const path in modules) {
    allAsyncRoutes.push(...modules[path].default)
  }

  // 如果用户没有菜单
  if (!authStore.menu.length) {
    ElNotification({
      title: '无权限访问',
      message: '当前账号无任何菜单权限，请联系系统管理员！',
      type: 'warning',
      duration: 3000
    })
    RESETSTORE()
    router.replace(LOGIN_URL)
    return Promise.reject('No permission')
  }

  const authRouterList = getRouteNameList(authStore.menu, 'route')

  // 2.过滤路由
  const routerList = filterAsyncRoutes(allAsyncRoutes, authRouterList)

  console.log(routerList, '过滤后路由')
}

/**
 *
 * @param {Array} menu 菜单列表
 * @returns 指定的嵌套数组对象字段值
 */
function getRouteNameList(menu, route) {
  let arr = []
  menu.forEach(item => {
    arr.push(item[route])
    if (item.children && item.children.length) {
      arr = arr.concat(getRouteNameList(item.children))
    }
  })
  return arr
}

/**
 *
 * @param {Array} allAsyncRoutes 前端注册的所有动态路由
 * @param {Array} authRouterList 用户路由权限数组
 * @returns
 */
function filterAsyncRoutes(allAsyncRoutes, authRouterList) {
  return allAsyncRoutes.filter(route => {
    // 1.如果route的name在authRouterList中没有, 直接过滤掉
    if (!authRouterList.includes(route.name)) return false

    // 2.如果当前route还有子路由(也就是有children), 需要对子路由也进行权限过滤
    if (route.children && route.children.length > 0) {
      route.children = filterAsyncRoutes(route.children, authRouterList)
    }
    return true
  })
}
