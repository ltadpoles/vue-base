<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <component is="twitter-outlined" />
      <h3 class="admin-title">后台管理系统</h3>
    </div>

    <a-menu mode="inline" >
      <menu-tree :menu="menu" />
    </a-menu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import MenuTree from '../menu/index.vue'

const defaultActive = ref('0')

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
const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])

const flodClick = () => {}
const handleClick = e => {
  console.log('click', e)
}
const titleClick = e => {
  console.log('titleClick', e)
}
watch(openKeys, val => {
  console.log('openKeys', val)
})
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
