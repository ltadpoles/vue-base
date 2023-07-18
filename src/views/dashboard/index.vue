<template>
  <div>
    dashboard
    <div>
      <v-upload
        action="/api/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        @fileSuccess="fileSuccess"
        @fileRemove="fileRemove"
        list-type="picture-card"
        :drag="true"
      />
    </div>
  </div>
</template>

<script setup>
import vUpload from '@/components/upload/index.vue'

const fileSuccess = file => {
  console.log(file)
}

const fileRemove = fileList => {
  console.log('删除了啊', fileList)
}
</script>
