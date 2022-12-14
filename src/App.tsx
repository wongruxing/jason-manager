import { useState } from 'react'
// import { Button } from 'antd';
// import { UpCircleOutlined } from "@ant-design/icons"
// import 'antd/dist/antd.css'; //全局，全部组件的样式都引入(版本4.0以上的不需要引入)
// import './App.css'
import { useRoutes, Link } from "react-router-dom"
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* 顶级文件
      <Button type="primary">按钮</Button>
      <UpCircleOutlined style={{ fontSize: '40px', color: 'red' }} /> */}
      {/* 占位符组件 类似于 窗口 用来展示组件的 类似于vue中的router-view */}

      {/* <Link to="/home">Home</Link>|
      <Link to="/about">About</Link>|
      <Link to="/user">User</Link> */}

      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
