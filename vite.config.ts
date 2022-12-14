import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import * as path from 'path'
import styleImport, { AntdResolve } from 'vite-plugin-style-import'
import path from 'path'


// 需要路径别名配置
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves: [
        AntdResolve()
      ]
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})

