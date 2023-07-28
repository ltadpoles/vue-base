<template>
  <div class="layout">
    <section class="layout-left">
      <section class="v-sidebar" :class="settingStore.isCollapsed ? 'v-sidebar-collapsed' : ''">
        <v-sidebar />
      </section>
    </section>

    <section class="layout-right">
      <section class="v-header">
        <v-header />
      </section>
      <section>
        <el-scrollbar class="content-views" wrap-class="wrap-sty">
          <router-view v-slot="{ Component }">
            <transition name="slide-fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-scrollbar>
      </section>
    </section>
  </div>
</template>

<script setup>
import vHeader from './components/header/index.vue'
import vSidebar from './components/sidebar/index.vue'
import { useSettingStore } from '@/stores/modules/setting'

const settingStore = useSettingStore()
</script>

<style lang="less" scoped>
.layout {
  overflow: hidden;
  display: flex;

  .layout-left {
    height: 100vh;
    .v-sidebar {
      width: 200px;
      min-width: 200px;
      height: 100%;
      transition: all 0.2s;
    }

    .v-sidebar-collapsed {
      width: 65px;
      min-width: 65px;
      height: 100%;
    }
  }

  .layout-right {
    flex: 1;
    .content-views {
      height: calc(100vh - 68px);
      padding: 15px;
      box-sizing: border-box;
    }
  }
}
</style>

<style lang="less">
/** 解决横向滚动条问题 */
.wrap-sty {
  .el-scrollbar__view {
    overflow-x: hidden;
  }
}
</style>
