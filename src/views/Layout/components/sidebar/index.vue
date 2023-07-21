<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <el-icon :size="20">
        <component is="Shop" />
      </el-icon>

      <h3 class="admin-title" v-show="!settingStore.isCollapsed">管理系统</h3>
    </div>

    <el-menu router :default-active="route.path" :unique-opened="true" :collapse="settingStore.isCollapsed">
      <menu-tree :menu="menu" />
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MenuTree from '../menu/index.vue'
import { useSettingStore } from '@/stores/modules/setting'

import { useRoute } from 'vue-router'

const settingStore = useSettingStore()

const route = useRoute()

const menu = ref([
  {
    name: '首页',
    id: '01',
    icon: 'Avatar',
    url: '/dashboard'
  },
  {
    name: '多层',
    id: '02',
    icon: 'Location',
    children: [
      {
        name: '列表',
        id: '020',
        url: '/more/list'
      }
    ]
  },
  {
    name: '用户管理',
    id: '01',
    icon: 'HomeFilled',
    children: [
      {
        id: '010',
        name: '二级',
        children: [
          {
            id: '0110',
            name: '三级',
            url: '/user/sec/about'
          }
        ]
      },
      {
        id: '011',
        name: '二级1号',
        children: [
          {
            id: '0111',
            name: '三级1号',
            url: '/user/two/about1'
          }
        ]
      }
    ]
  }
])
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
