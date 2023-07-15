import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 菜单收缩控制
  const isCollapsed = ref(false)
  function increment() {
    isCollapsed.value = !isCollapsed.value
  }

  return { isCollapsed, increment }
})
