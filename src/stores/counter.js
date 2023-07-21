import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isCollapsed: false, // 菜单收缩控制
    primaryColor: '#409eff', // 项目主题色
    token: {}
  }),
  getters: {
    getToken: state => state.token,
    getPrimaryColor: state => state.primaryColor
  },
  actions: {
    increment() {
      this.isCollapsed = !this.isCollapsed
    },
    setToken(data) {
      this.token = data
    },
    setPrimaryColor(color = this.primaryColor) {
      this.primaryColor = color
      const el = document.documentElement
      // 获取 css 变量
      getComputedStyle(el).getPropertyValue(`--el-color-primary`)
      // 设置 css 变量
      el.style.setProperty('--el-color-primary', color)
    }
  },
  // 持久化存储
  persist: {
    storage: sessionStorage,
    paths: ['token', 'primaryColor']
  }
})
