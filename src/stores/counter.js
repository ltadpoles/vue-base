import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isCollapsed: false // 菜单收缩控制
  }),
  getters: {},
  actions: {
    increment() {
      this.isCollapsed = !this.isCollapsed
    }
  },
  // 持久化存储
  persist: {
    storage: sessionStorage,
    paths: []
  }
})
