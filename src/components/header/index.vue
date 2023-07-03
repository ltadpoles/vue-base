<template>
  <div class="header">
    <div class="header-left">
      <el-icon class="cursor-icon" size="26" color="#333" @click="flodClick"><Fold /></el-icon>
    </div>
    <div class="header-right">
      <span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon size="26" class="cursor-icon"><User /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>关于</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script setup>
const flodClick = () => {}
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
