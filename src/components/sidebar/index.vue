<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <el-icon size="26"><ElemeFilled /></el-icon>
      <h3 class="admin-title">后台管理系统</h3>
    </div>
    <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
      <el-menu :default-active="defaultActive" :unique-opened="true" class="el-menu-vertical-demo">
        <template v-for="item in menu">
          <template v-if="item.children && item.children.length > 0">
            <el-sub-menu :key="item.id" :index="item.id" :disabled="item.meta?.disabled">
              <template #title>
                <i :class="[item.meta?.icon]"></i>
                <span v-for="sp in item.level - 1">&nbsp;&nbsp;</span>
                <span slot="title"> {{ item.name }}</span>
              </template>
              <MenuTree :menu="item.children" :defaultActive="defaultActive" @clickItem="clickItemHandle" />
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item
              :key="item.id"
              :index="item.id"
              :disabled="item.meta?.disabled"
              @click="clickItemHandle(item)"
            >
              <i :class="[item.meta?.icon]"></i>
              <span v-for="sp in item.level - 1">&nbsp;&nbsp;</span>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuTree from '../menu/index.vue'

const defaultActive = ref('0')

const menu = ref([
  {
    name: '一级',
    id: '01',
    level: '1',
    children: [
      {
        id: '010',
        name: '二级',
        level: '2',
        children: [
          {
            id: '0110',
            name: '三级',
            level: '3'
          }
        ]
      }
    ]
  },
  {
    name: '单层',
    id: '02',
    level: '1',
    children: [
      {
        name: '二册',
        id: '020',
        level: '2'
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

const clickItemHandle = item => {
  context.emit('clickItem', item)
}

const flodClick = () => {}
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
