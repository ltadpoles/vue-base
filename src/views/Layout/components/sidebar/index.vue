<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <el-icon :size="20">
        <component is="Shop" />
      </el-icon>

      <h3 class="admin-title" v-show="!settingStore.isCollapsed">管理系统</h3>
    </div>

    <el-menu router :default-active="route.path" :unique-opened="true" :collapse="settingStore.isCollapsed">
      <menu-tree :menu="authStore.menu" />
    </el-menu>
  </div>
</template>

<script setup>
import MenuTree from '../menu/index.vue'
import { useSettingStore } from '@/stores/modules/setting'

import { useRoute } from 'vue-router'
import { useAuthStore } from '../../../../stores/modules/auth'

const settingStore = useSettingStore()
const authStore = useAuthStore()

const route = useRoute()
</script>

<style lang="less" scoped>
.sidebar {
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  height: 100%;
  .sidebar-top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    .admin-title {
      padding-left: 8px;
    }
  }

  .el-menu {
    border: none;
  }
}
</style>
