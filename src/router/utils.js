/**
 *
 * @param {Array} menu 需要过滤的菜单
 * @param {String} routeName 过滤的菜单字段
 * @returns 菜单过滤字段的数组
 */
export const getRouteNameList = (menu, routeName) => {
  let arr = []
  menu.forEach(item => {
    arr.push(item[routeName])
    if (item.children && item.children.length) {
      arr = arr.concat(getRouteNameList(item.children, routeName))
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
export const filterAsyncRoutes = (allAsyncRoutes, authRouterList) => {
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
