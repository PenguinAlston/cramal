import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe} from 'vite-plugin-mock'
import { watchFile } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    viteMockServe({
      mockPath: "mock", // mock 路径
      supportTs: false, // true为监视 .ts文件  无法监视.js 文件
      watchFile: true  // 监视文件变更
    })
  ],
  resolve:{
    alias:{
      "@" : resolve(__dirname,'src'), // 路径别名
      "~" : resolve(__dirname,"./")
    },
    extensions: ['.js','.json','.ts'] // 使用路径别名时，想要省略的后缀名 可自己手动配置
  }
})
