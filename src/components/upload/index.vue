<template>
  <el-upload
    :file-list="fileList"
    :action="action"
    :headers="headers"
    :disabled="disabled"
    :multiple="multiple"
    :data="data"
    :name="name"
    :accept="accept"
    :limit="limit"
    :list-type="listType"
    :show-file-list="isShowFileList"
    :on-preview="onPreview"
    :on-remove="onRemove"
    :before-remove="beforeRemove"
    :before-upload="beforeUpload"
    :on-success="onSuccess"
    :on-error="onError"
    :on-progress="onProgress"
    :on-exceed="onExceed"
  >
    <el-button type="primary">上传</el-button>
    <template #tip v-if="isTip">
      <div class="el-upload__tip">{{ tipContent }}</div>
    </template>
  </el-upload>

  <!-- <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog> -->
</template>

<script setup>
import { ElMessage } from 'element-plus'

defineProps({
  // 请求地址 必传
  action: {
    type: String,
    required: true
  },
  // 请求头
  headers: {
    type: Object,
    default: () => {}
  },
  // 是否有tip提示
  isTip: {
    type: Boolean,
    default: () => false
  },
  // 当isTip为true时，此项必传
  tipContent: {
    type: String,
    default: () => '提示'
  },
  // 是否禁用上传
  disabled: {
    type: Boolean,
    default: () => false
  },
  // 是否支持多选
  multiple: {
    type: Boolean,
    default: () => false
  },
  // 上传时附带的额外参数
  data: {
    type: Object,
    default: () => {}
  },
  // 上传的文件字段名
  name: {
    type: String,
    default: () => 'file'
  },
  // 是否显示已上传文件列表
  isShowFileList: {
    type: Boolean,
    default: () => true
  },
  fileList: {
    type: Array,
    default: () => []
  },
  // 是否启用拖拽上传
  drag: {
    type: Boolean,
    default: () => false
  },
  // 接受上传的文件类型
  accept: {
    type: String
  },
  // 允许上传文件的最大数量
  limit: {
    type: Number,
    default: () => 3
  },
  listType: {
    type: String,
    default: () => 'text'
  },
  // 点击文件列表中已上传的文件时的钩子
  onPreview: {
    type: Function
  },
  // 文件列表移除文件时的钩子
  onRemove: {
    type: Function
  },
  // 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除
  beforeRemove: {
    type: Function
  },
  beforeUpload: {
    type: Function
  },
  // 文件上传成功时的钩子
  onSuccess: {
    type: Function
  },
  // 文件上传时的钩子
  onProgress: {
    type: Function
  },
  // 	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
  onChange: {
    type: Function
  }
})

// 文件上传失败时的钩子
const onError = () => {
  ElMessage.error('上传失败')
}

// 当超出限制时，执行的钩子函数
const onExceed = () => {
  ElMessage.error('超出上传限制')
}
</script>
