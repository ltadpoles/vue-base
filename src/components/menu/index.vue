<template>
  <template v-for="item in menu">
    <a-sub-menu :key="item.key" v-if="item.children && item.children.length > 0" @titleClick="titleClick">
      <template #icon>
        <component is="wallet-outlined" />
      </template>

      <template #title> Navigation Two </template>
      <menu-tree :menu="item.children" />
    </a-sub-menu>

    <template v-else>
      <a-menu-item :key="item.key">
        <template #icon>
          <component is="wallet-outlined" />
        </template>
        Option 9
      </a-menu-item>
    </template>
  </template>
</template>

<script setup>
import MenuTree from './index.vue'
defineProps({
  menu: {
    type: Array,
    required: true,
    default: () => []
  }
})
const titleClick = e => {
  // console.log(e)
}
</script>
