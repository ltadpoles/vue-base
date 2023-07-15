<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <el-icon :size="20">
        <component is="Shop" />
      </el-icon>

      <h3 class="admin-title" v-show="!counter.isCollapsed">管理系统</h3>
    </div>

    <el-menu router :default-active="route.path" :unique-opened="true" :collapse="counter.isCollapsed">
      <menu-tree :menu="menu" />
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MenuTree from '../menu/index.vue'
import { useCounterStore } from '@/stores/counter'

import { useRoute } from 'vue-router'

const counter = useCounterStore()

const route = useRoute()

const menu = ref([
  {
    name: '一级',
    id: '01',
    icon: 'HomeFilled',
    url: '01',
    children: [
      {
        id: '010',
        name: '二级',
        url: '02',
        children: [
          {
            id: '0110',
            name: '三级',
            url: '/user/about'
          }
        ]
      }
    ]
  },
  {
    name: '单侧',
    id: '03',
    icon: 'Avatar',
    url: '/dashboard'
  }
  // {
  //   name: '单层',
  //   id: '02',
  //   icon: 'Location',
  //   url: '',
  //   children: [
  //     {
  //       name: '二册',
  //       id: '020',
  //       url: '/layout/about'
  //     }
  //   ]
  // }
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
