import axios from 'axios'
import { refresh } from './refresh-token'
import { useUserStore } from '@/stores/modules/user'
import { ENV } from '@/config'
import { ElMessage } from 'element-plus'

const http = axios.create()

http.defaults.timeout = 3000

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    const token = userStore.token.token

    // 添加 header 请求头
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // 如果需要header，在config中设置 isHaveHeader 为 true
    if (response.config.isHaveHeader) {
      return response
    }
    return response.data

  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    switch (error.response.status) {
    case 400:
      return ElMessage({
        message: error.response.data.error_description,
        type: 'error'
      })
    case 401:
      if (ENV.ISREFRESHTOKEN) {
        refresh(http, error.response.config)
      } else {
        ElMessage({
          message: '登录已过期，请重新登录',
          type: 'error'
        })
      }
      break
    case 403:
      return ElMessage({
        message: '您没有相关权限',
        type: 'error'
      })
    case 404:
      return ElMessage({
        message: '请求链接不存在',
        type: 'error'
      })
    case 500:
      return ElMessage({
        message: '服务器错误，请稍后再试',
        type: 'error'
      })
    default:
      ElMessage({
        message: '系统异常，请稍后再试',
        type: 'error'
      })
    }

    return Promise.reject(error)
  }
)

export default http
