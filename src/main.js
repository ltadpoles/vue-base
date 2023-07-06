import 'ant-design-vue/dist/antd.css'
import './assets/styles/main.css'

import * as Icons from '@ant-design/icons-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 注册图标组件
for (const i in Icons) {
  app.component(i, Icons[i])
}

app.use(createPinia())
app.use(router)

app.mount('#app')
