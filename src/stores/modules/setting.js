/*
 * @Description: 项目配置store
 */
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('settingStore', {
  state: () => ({
    isCollapsed: false, // 菜单收缩控制
    primaryColor: '#409eff' // 项目主题色
  }),
  actions: {
    increment() {
      this.isCollapsed = !this.isCollapsed
    },
    setPrimaryColor(color = this.primaryColor) {
      this.primaryColor = color
      const el = document.documentElement
      // 获取 css 变量
      getComputedStyle(el).getPropertyValue(`--el-color-primary`)
      // 设置 css 变量
      el.style.setProperty('--el-color-primary', color)
    }
  }
})
