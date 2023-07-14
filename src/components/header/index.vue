<template>
  <div class="header">
    <div class="header-left">
      <component
        class="cursor-icon"
        is="menu-fold-outlined"
        v-show="!counter.isCollapsed"
        @click="flodClick"
      ></component>
      <component
        class="cursor-icon"
        is="menu-unfold-outlined"
        v-show="counter.isCollapsed"
        @click="flodClick"
      ></component>
    </div>
    <div class="header-right">
      <span>
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <component is="user-outlined" />
          </a>
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="/layout/about">
                <a href="javascript:;">个人中心</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">设置</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">关于</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

import { useRouter } from 'vue-router'

const counter = useCounterStore()

const router = useRouter()

const flodClick = () => {
  counter.increment()
}

const handleMenuClick = e => {
  console.log('click', e)
  router.push(e.key)
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

  .cursor-icon {
    cursor: pointer;
  }
}
</style>
