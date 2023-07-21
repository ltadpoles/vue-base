/*
 * @Author: tadpole
 * @Date: 2023-07-21 17:39:02
 * @LastEditTime: 2023-07-21 18:19:47
 * @Description: 用户权限store
 */

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({}),

  actions: {},
  // 持久化存储
  persist: {
    storage: sessionStorage
  }
})
