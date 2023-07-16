import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 菜单收缩控制
  const isCollapsed = ref(false)
  function increment() {
    isCollapsed.value = !isCollapsed.value
  }

  // 设置面包屑导航
  const crumbList = ref([])
  function setCrumbList(data) {
    crumbList.value = data
  }

  return { isCollapsed, increment, crumbList, setCrumbList }
})
