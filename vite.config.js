import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@" : resolve(__dirname,'src'), // 路径别名
      "~" : resolve(__dirname,"./")
    },
    extensions: ['.js','.json','.ts'] // 使用路径别名时，想要省略的后缀名 可自己手动配置
  }
})
