<template>
  <div class="login">
    <div class="login-mask">
      <el-button type="primary" @click="login" :loading="loading">登录</el-button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { loginIn } from '@/api/user'
import { useUserStore } from '@/stores/modules/user'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const loading = ref(false)
const login = async () => {
  loading.value = true
  const { data } = await loginIn()
  const userStore = useUserStore()

  userStore.setToken(data)

  setTimeout(async () => {
    loading.value = false
    await router.replace(route.query.redirect || '/')
  }, 1000)
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url('@/assets/images/login.jpg') no-repeat;
  opacity:0.6; filter: alpha(opacity=10);
  // .login-mask {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: rgba(200,200,200,.5);
  //   z-index: 1000;
  // }
}
</style>
