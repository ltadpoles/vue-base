<template>
  <el-upload
    ref="elUpload"
    :file-list="fileList"
    :action="action"
    :headers="headers"
    :disabled="disabled"
    :multiple="multiple"
    :data="data"
    :name="name"
    :accept="accept"
    :fileSize="fileSize"
    :limit="limit"
    :list-type="listLocalType"
    :drag="drag"
    :show-file-list="isShowFileList"
    :on-preview="onPreview"
    :on-remove="onRemove"
    :before-remove="beforeRemove"
    :before-upload="beforeUpload"
    :on-success="onSuccess"
    :on-error="onError"
    :on-progress="onProgress"
    :on-exceed="onExceed"
    :on-change="onChange"
  >
    <template v-if="!drag">
      <el-button type="primary" v-if="listLocalType == 'text' || listLocalType == 'picture'">{{ btnText }}</el-button>
      <el-icon v-else><Plus /></el-icon>
    </template>
    <template v-else>
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div>拖拽文件到此或者<em>点击上传</em></div>
    </template>
    <template #tip v-if="showTip">
      <div class="el-upload__tip">{{ tipContent }}</div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img style="width: 95%; height: 95%" w-full :src="dialogImageUrl" alt="图片预览" />
  </el-dialog>
</template>

<script setup>
import { computed, onBeforeMount, ref, toRefs } from 'vue'
import { useUserStore } from '@/stores/modules/user'

const userStore = useUserStore()

const dialogVisible = ref(false)
const dialogImageUrl = ref('')
const listLocalType = ref('text')

const props = defineProps({
  // 请求地址
  action: {
    type: String,
    default: ''
  },
  // 请求头
  headers: {
    type: Object,
    default: () => {
      return {
        Authorization: computed(() => userStore.token.token)
      }
    }
  },
  // 上传按钮文字
  btnText: {
    type: String,
    default: '上传'
  },
  // 默认上传文件，可用于回显
  fileList: {
    type: Array,
    default: []
  },
  // 是否有tip提示
  showTip: {
    type: Boolean,
    default: false
  },
  // 提示文案
  tipContent: {
    type: String,
    default: '提示'
  },
  // 是否禁用上传
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否支持多选
  multiple: {
    type: Boolean,
    default: false
  },
  // 上传时附带的额外参数
  data: {
    type: Object,
    default: {}
  },
  // 上传的文件字段名
  name: {
    type: String,
    default: 'file'
  },
  // 是否显示已上传文件列表
  isShowFileList: {
    type: Boolean,
    default: true
  },
  // 接受上传的文件类型
  accept: {
    type: String
  },
  // 限制上传文件大小，默认不限制
  fileSize: {
    type: Number
  },
  // 允许上传文件的最大数量, 默认 3
  limit: {
    type: Number,
    default: 3
  },
  listType: {
    type: String,
    default: 'text'
  },
  // 是否启用拖拽上传
  drag: {
    type: Boolean,
    default: false
  },
  // 	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
  onChange: {
    type: Function
  }
})

//定义变量接收父组件传来的方法
const emit = defineEmits(['fileSuccess', 'fileRemove'])

onBeforeMount(() => {
  // 可拖拽模式下 设置 listType 无效
  if (props.drag) {
    listLocalType.value = 'text'
  } else {
    listLocalType.value = props.listType
  }
})

// 文件上传成功
const onSuccess = response => {
  emit('fileSuccess', response)
}

// 文件删除
const onRemove = (file, fileList) => {
  // 防止 beforeUpload 阻止上传调用
  if (file && file.status == 'success') {
    emit('fileRemove', fileList)
  }
}

// 文件上传失败时的钩子
const onError = () => {
  ElMessage.error('文件上传失败，请稍后再试')
}

// 当超出限制时，执行的钩子函数
const onExceed = () => {
  ElMessage.error(`超出上传限制，最多可上传${props.limit}份文件`)
}

// 点击文件列表中已上传的文件时的钩子
const onPreview = evt => {
  if (evt.url) {
    let fileType = evt.name.split('.')[evt.name.split('.').length - 1]
    let prevType = ['jpg', 'png', 'gif']
    if (!prevType.includes(fileType)) {
      return ElMessage.warning('只可预览图片类型文件')
    }
    dialogVisible.value = true
    dialogImageUrl.value = evt.url
  }
}

// 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除
const beforeRemove = file => {
  // 防止 beforeUpload 阻止上传调用
  if (file && file.status == 'success') {
    return ElMessageBox.confirm(`确认删除 ${file.name} ?`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        ElMessage.success('操作成功！')
      })
      .catch(() => false)
  }
}

// 文件上传之前的钩子
const beforeUpload = rawFile => {
  const { accept, fileSize } = toRefs(props)

  // 如果设置了文件类型
  if (accept.value) {
    let fileType = rawFile.name.split('.')[rawFile.name.split('.').length - 1]

    // 不允许上传的文件类型
    if (!accept.value.includes(fileType)) {
      let str = accept.value.replace(/,/g, '/')
      str = str.replace(/\./g, ' ')
      ElMessage({
        type: 'warning',
        message: `允许上传的文件类型为 ${str}`,
        duration: 4000
      })
      return false
    }
  }

  // 如果设置了文件大小限制
  if (fileSize.value && rawFile.size / 1024 / 1024 > fileSize.value) {
    ElMessage({
      type: 'warning',
      message: `允许上传的文件大小为不超过 ${fileSize.value}MB`,
      duration: 4000
    })
    return false
  }

  return true
}

// 文件上传中的钩子，获取进度等
const onProgress = evt => {}

// 	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
const onChange = (file, fileList) => {}
</script>
