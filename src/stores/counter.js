import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isCollapsed = ref(false)
  function increment() {
    isCollapsed.value = !isCollapsed.value
  }

  return { isCollapsed, increment }
})
