<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <component is="field-number-outlined" />
      <h3 class="admin-title" v-show="!counter.isCollapsed">管理系统</h3>
    </div>

    <a-menu
      mode="inline"
      :inlineCollapsed="counter.isCollapsed"
      @click="handleClick"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
      <menu-tree :menu="menu" />
    </a-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuTree from '../menu/index.vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

const menu = ref([
  {
    name: '一级',
    id: '01',
    children: [
      {
        id: '010',
        name: '二级',
        children: [
          {
            id: '0110',
            name: '三级'
          }
        ]
      }
    ]
  },
  {
    name: '单侧',
    id: '03'
  },
  {
    name: '单层',
    id: '02',
    children: [
      {
        name: '二册',
        id: '020'
      }
    ]
  }
])
const selectedKeys = ref(['02', '020'])
const openKeys = ref(['02', '020'])

const handleClick = e => {
  console.log('click', e)
  console.log(selectedKeys)
}
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
