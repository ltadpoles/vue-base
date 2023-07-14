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
      @openChange="onOpenChange"
      :openKeys="openKeys"
      :selectedKeys="[route.path]"
    >
      <menu-tree :menu="menu" />
    </a-menu>
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
    children: [
      {
        id: '010',
        name: '二级',
        children: [
          {
            id: '0110',
            name: '三级',
            key: '/layout/about'
          }
        ]
      }
    ]
  },
  {
    name: '单侧',
    id: '03',
    key: '/layout'
  },
  {
    name: '单层',
    id: '02',
    children: [
      {
        name: '二册',
        id: '020',
        key: '/tuey'
      }
    ]
  }
])

const openKeys = ref([])

const handleClick = item => {
  router.push(item.key)

  // 只有一层的菜单 清空展开数组
  if (item.keyPath.length == 1) {
    counter.removeOpenKey()
    openKeys.value = []
  }
}

const onOpenChange = keys => {
  console.log(keys)
  // 保存展开的菜单
  counter.setOpenKey(JSON.stringify(keys))
}

onMounted(() => {
  // 设置刷新前的菜单展开项
  let openKey = counter.getOpenKey()
  openKey = openKey ? JSON.parse(openKey) : []
  openKeys.value = openKey
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
