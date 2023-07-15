<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <el-icon :size="20">
        <component is="Shop" />
      </el-icon>

      <h3 class="admin-title" v-show="!counter.isCollapsed">管理系统</h3>
    </div>

    <el-menu default-active="2" router :collapse="counter.isCollapsed" @open="handleOpen" @close="handleClose">
      <menu-tree :menu="menu" />
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MenuTree from '../menu/index.vue'
import { useCounterStore } from '@/stores/counter'

import { useRoute, useRouter } from 'vue-router'

const counter = useCounterStore()

const router = useRouter()
const route = useRoute()

const menu = ref([
  {
    name: '一级',
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
            url: '/layout/about'
          }
        ]
      }
    ]
  },
  {
    name: '单侧',
    id: '03',
    icon: 'Avatar',
    url: '/layout'
  },
  {
    name: '单层',
    id: '02',
    icon: 'Location',
    children: [
      {
        name: '二册',
        id: '020',
        url: '/layout/about'
      }
    ]
  }
])

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

onMounted(() => {})
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
