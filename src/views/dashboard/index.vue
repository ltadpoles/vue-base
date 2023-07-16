<template>
  <div>
    dashboard
    <div>
      <v-upload action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :onSuccess="onSuccess" />
    </div>
  </div>
</template>

<script setup>
import vUpload from '@/components/upload/index.vue'

const onSuccess = file => {
  console.log(file)
}
</script>
