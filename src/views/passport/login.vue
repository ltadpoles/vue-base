<template>
  <div>
    <el-button type="primary" @click="login" :loading="loading">登录</el-button>
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

  setTimeout(() => {
    loading.value = false
    router.replace(route.query.redirect || '/')
  }, 3000)
}
</script>
