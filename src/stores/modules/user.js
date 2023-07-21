/*
 * @Author: tadpole
 * @Date: 2023-07-21 17:38:19
 * @LastEditTime: 2023-07-21 18:11:02
 * @Description: 用户store
 */

import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {},
    token: {}
  }),
  actions: {
    setToken(data) {
      this.token = data
    },
    setUserInfo(data) {
      this.userInfo = data
    }
  },
  // 持久化存储
  persist: {
    storage: sessionStorage
  }
})
