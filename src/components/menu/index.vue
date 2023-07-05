<template>
  <el-menu :default-active="defaultActive" :unique-opened="true" class="el-menu-vertical-demo">
    <template v-for="item in menu">
      <!-- 如果有子集 -->
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
      <!-- 如果没有子集 -->
      <template v-else>
        <el-menu-item :key="item.id" :index="item.id" :disabled="item.meta?.disabled" @click="clickItemHandle(item)">
          <i :class="[item.meta?.icon]"></i>
          <span v-for="sp in item.level - 1">&nbsp;&nbsp;</span>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script setup>
import MenuTree from './index.vue'
defineProps({
  menu: {
    type: Array,
    required: true,
    default: () => []
  },
  defaultActive: {
    type: String,
    required: true,
    default: []
  }
})

const emit = defineEmits(['update-active-path', 'clickItem'])

// 点击当前菜单项
const clickItemHandle = item => {
  emit('clickItem', item)
}
</script>
