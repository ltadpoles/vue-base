<template>
  <div class="header">
    <div class="header-left">
      <el-icon :size="20" class="cursor-icon" v-show="!settingStore.isCollapsed" @click="flodClick">
        <component is="Fold" />
      </el-icon>
      <el-icon :size="20" class="cursor-icon" v-show="settingStore.isCollapsed" @click="flodClick">
        <component is="Expand" />
      </el-icon>

      <v-breadcrumb class="breadcrumb-sty" />
    </div>
    <div class="header-right">
      <el-dropdown trigger="click" @command="handleMenuClick">
        <span class="header-right-user cursor-icon">
          <el-avatar :size="28" :src="circleUrl" />
          &nbsp; 游荡de蝌蚪
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="/dashboard">
              <el-icon><User /></el-icon>
              <span>个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item command="/user/sec/about" @click="setting">
              <el-icon><Setting /></el-icon>
              <span>设置</span>
            </el-dropdown-item>
            <el-dropdown-item divided command="/login" @click="logout">
              <el-icon><SwitchButton /></el-icon>
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <el-drawer v-model="themeConfig.drawer" :with-header="false" :destroy-on-close="true">
      <div class="drawer-item">
        <span class="demonstration">暗黑模式：</span>
        <el-switch v-model="themeConfig.theme" @change="themeChange" />
      </div>
      <div class="drawer-item">
        <span class="demonstration">主题色设置：</span>
        <el-color-picker v-model="themeConfig.primaryColor" @change="colorChange" />
      </div>
      <div class="drawer-item">
        <span class="demonstration">灰色模式：</span>
        <el-switch v-model="themeConfig.gray" @change="grayChange" />
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { useSettingStore } from '@/stores/modules/setting'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import vBreadcrumb from '@/components/breadcrumb/index.vue'
const settingStore = useSettingStore()
const router = useRouter()

const themeConfig = reactive({
  drawer: false,
  theme: false, // 暗黑模式
  primaryColor: '', // 主题色
  gray: false // 灰色模式
})

// 默认头像
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

const flodClick = () => {
  settingStore.increment()
}

const handleMenuClick = command => {
  router.push(command)
}

const themeChange = val => {
  if (val) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const setting = () => {
  themeConfig.primaryColor = settingStore.primaryColor
  themeConfig.drawer = true
}

const colorChange = color => {
  if (color) {
    settingStore.setPrimaryColor(color)
  } else {
    settingStore.setPrimaryColor('#409eff')
  }
}

const grayChange = val => {
  if (val) {
    document.documentElement.classList.add('gray')
  } else {
    document.documentElement.classList.remove('gray')
  }
}

const logout = () => {
  // 清空 pinia 存储
  settingStore.$reset()
  router.replace('/login')
  ElMessage({
    message: '退出登录',
    type: 'success'
  })
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  padding: 0 30px;
  border-bottom: 1px solid var(--el-border-color);
  .header-left {
    display: flex;
    align-items: center;
    .breadcrumb-sty {
      margin-left: 15px;
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .header-right-theme {
      margin-right: 10px;
    }
    .header-right-user {
      display: flex;
      align-items: center;
    }
  }

  .cursor-icon {
    cursor: pointer;
  }
}

.drawer-item {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
