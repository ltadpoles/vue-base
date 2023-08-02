<template>
  <div>

    <v-dialog :isShow="isShow" @close="close" :fullscreen="true" />
  </div>
</template>

<script setup>
import vDialog from '@/components/dialog/index.vue'
import { ref } from 'vue'

const isShow = ref(false)

const close = val => {
  isShow.value = val
}

</script>
