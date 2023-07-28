<template>
  <div>
    <div>
      <v-upload
        action="/api/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        @fileSuccess="fileSuccess"
        @fileRemove="fileRemove"
        list-type="picture-card"
        :drag="true"
      />
    </div>
    <el-button @click="shouDialog">打开dialog</el-button>
    <v-dialog :isShow="isShow" @close="close" :fullscreen="true" />
  </div>
</template>

<script setup>
import vUpload from '@/components/upload/index.vue'
import vDialog from '@/components/dialog/index.vue'
import { ref } from 'vue'

const isShow = ref(false)

const fileSuccess = file => {
  console.log(file)
}

const shouDialog = () => {
  isShow.value = true
}

const close = val => {
  isShow.value = val
}

const fileRemove = fileList => {
  console.log('删除了啊', fileList)
}
</script>
