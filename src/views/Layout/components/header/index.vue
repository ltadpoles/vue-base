<template>
  <div class="header">
    <div class="header-left">
      <el-icon :size="20" class="cursor-icon" v-show="!counter.isCollapsed" @click="flodClick">
        <component is="Fold" />
      </el-icon>
      <el-icon :size="20" class="cursor-icon" v-show="counter.isCollapsed" @click="flodClick">
        <component is="Expand" />
      </el-icon>
    </div>
    <div class="header-right">
      <el-switch v-model="light" class="mt-2" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" />
      <el-dropdown trigger="click" @command="handleMenuClick">
        <span class="header-right-user cursor-icon">
          <el-icon :size="20">
            <User />
          </el-icon>
          &nbsp; 游荡de蝌蚪
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="/dashboard">个人中心 </el-dropdown-item>
            <el-dropdown-item command="/dashboard">设置</el-dropdown-item>
            <el-dropdown-item command="/user/about">关于</el-dropdown-item>
            <el-dropdown-item divided command="/login">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
const counter = useCounterStore()
const router = useRouter()

const light = ref()

const flodClick = () => {
  counter.increment()
}

const handleMenuClick = command => {
  router.push(command)
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  padding: 0 30px;
  background-color: var(---color-background);
  border-bottom: 1px solid var(--color-border);
  .header-left {
    display: flex;
    align-items: center;
  }

  .header-right {
    .header-right-user {
      display: flex;
      align-items: center;
    }
  }

  .cursor-icon {
    cursor: pointer;
  }
}
</style>
