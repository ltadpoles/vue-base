<template>
  <div class="sidebar">
    <v-logo />
    <el-scrollbar class="menu-scrollbar">
      <el-menu router :default-active="route.path" :unique-opened="true" :collapse="settingStore.isCollapsed">
        <menu-tree :menu="authStore.menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import MenuTree from '../menu/index.vue'
import { useSettingStore } from '@/stores/modules/setting'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/modules/auth'
import vLogo from '../logo/index.vue'

const settingStore = useSettingStore()
const authStore = useAuthStore()

const route = useRoute()
</script>

<style lang="less" scoped>
.sidebar {
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  // height: 100%;
  height: 100vh;

  .el-menu {
    border: none;
  }
  .menu-scrollbar {
    height: calc(100vh - 68px);
  }
}
</style>
