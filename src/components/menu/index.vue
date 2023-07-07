<template>
  <template v-for="item in menu">
    <a-sub-menu :key="item.id" v-if="item.children && item.children.length > 0">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <menu-tree :menu="item.children" />
    </a-sub-menu>

    <template v-else>
      <a-menu-item :key="item.id">Option 9</a-menu-item>
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

const emit = defineEmits(['update-active-path', 'clickItem'])

// 点击当前菜单项
const clickItemHandle = item => {
  emit('clickItem', item)
}
</script>
