import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  envDir: 'env',
  // base: '/test/',
  plugins: [
    vue(),
    // 组件命名插件
    vueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'static/js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
      }
    }
  },
  server: {
    // 代理
    proxy: {
      '/api': {
        target: 'https://run.mocky.io',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
