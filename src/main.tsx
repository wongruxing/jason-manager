import React from 'react'
import ReactDOM from 'react-dom/client'
// 正确的样式引入
import "reset-css"//样式初始化一般放在上面
// UI框架的样式
// 全局样式
import "@/assets/style/global.scss" //需要路径别名配置才能识别@符号
// 组件的样式
import App from './App'
import { BrowserRouter } from "react-router-dom"
// import Router from "./router"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
