import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isCollapsed: false, // 菜单收缩控制
    tokenInfo: {}
  }),
  getters: {
    getToken: state => state.tokenInfo
  },
  actions: {
    increment() {
      this.isCollapsed = !this.isCollapsed
    },
    setToken(data) {
      this.tokenInfo = data
    }
  },
  // 持久化存储
  persist: {
    storage: sessionStorage,
    paths: ['tokenInfo']
  }
})
