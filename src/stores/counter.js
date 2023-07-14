import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 菜单收缩控制
  const isCollapsed = ref(false)
  function increment() {
    isCollapsed.value = !isCollapsed.value
  }

  function setOpenKey(data) {
    return sessionStorage.setItem('openKeys', data)
  }
  function getOpenKey() {
    return sessionStorage.getItem('openKeys')
  }
  function removeOpenKey() {
    return sessionStorage.removeItem('openKeys')
  }

  return { isCollapsed, increment, setOpenKey, getOpenKey, removeOpenKey }
})
