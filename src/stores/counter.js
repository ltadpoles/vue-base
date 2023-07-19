import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isCollapsed: false, // 菜单收缩控制
    token: {}
  }),
  getters: {
    getToken: state => state.token
  },
  actions: {
    increment() {
      this.isCollapsed = !this.isCollapsed
    },
    setToken(data) {
      this.token = data
    }
  },
  // 持久化存储
  persist: {
    storage: sessionStorage,
    paths: ['token']
  }
})
