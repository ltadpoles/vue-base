<template>
  <el-config-provider>
    <RouterView />
  </el-config-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus'

</script>
