<template>
  <template v-for="item in menu">
    <el-sub-menu :index="item.url || item.id" v-if="item.children && item.children.length > 0">
      <template #title>
        <el-icon :size="20">
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <menu-tree :menu="item.children" />
    </el-sub-menu>

    <template v-else>
      <el-menu-item :index="item.url">
        <el-icon :size="20">
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup name="menuTree">
defineProps({
  menu: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
