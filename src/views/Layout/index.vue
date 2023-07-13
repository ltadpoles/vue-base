<template>
  <div class="layout">
    <section class="layout-left">
      <section class="v-sidebar" :class="counter.isCollapsed ? 'v-sidebar-collapsed' : ''">
        <v-sidebar />
      </section>
    </section>

    <section class="layout-right">
      <section class="v-header">
        <v-header />
      </section>
      <section class="content-views">
        <RouterView />
      </section>
      <section class="v-footer">
        <v-footer />
      </section>
    </section>
  </div>
</template>

<script setup>
import vHeader from '@/components/header/index.vue'
import vSidebar from '@/components/sidebar/index.vue'
import vFooter from '@/components/footer/index.vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
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
      transition: all .2s;
    }

    .v-sidebar-collapsed {
      width: 80px;
      min-width: 80px;
      height: 100%;
    }
  }

  .layout-right {
    flex: 1;
    .content-views {
      height: calc(100vh - 128px);
    }
  }
}
</style>
