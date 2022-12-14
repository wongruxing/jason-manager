
import React, { useState } from 'react';
// import {
//     DesktopOutlined,
//     FileOutlined,
//     PieChartOutlined,
//     TeamOutlined,
//     UserOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Breadcrumb, Layout } from 'antd';
// import views from './About';
import { Outlet } from "react-router-dom"
import MainMenu from '@/components/MainMenu'
const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('栏目 1', '/page1', <PieChartOutlined />),
//     getItem('栏目 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'page3', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const navigateTo = useNavigate()
    // const menuClick = (e: { key: string }) => {
    //     console.log("点击菜单", e.key);
    //     //  点击跳转到对应的路由 编程式导航跳转 利用到一个hook
    //     navigateTo(e.key)

    // }
    // const [openKeys, setOpenKeys] = useState(['']);
    // const handleOpenChange = (keys: string[]) => {
    //     // 什么时候执行函数里面的代码？展开和回收某项菜单的时候执行这里的代码
    //     console.log(keys);//keys是一个数组 记录当前哪一项是展开的（用key开记录）
    //     // 把这个数组修改成最后一项 因为只要一项是展开的 就是我刚刚点击的这一项
    //     setOpenKeys([keys[keys.length - 1]])
    // }
    return (
        // 左边侧边栏
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                {/* <Menu theme="dark"
                    defaultSelectedKeys={['/page1']}
                    mode="inline" items={items}
                    onClick={menuClick}
                    // 某项菜单展开回收的事件
                    onOpenChange={handleOpenChange}
                    // 当前菜单展开项目的keys数组
                    openKeys={openKeys}
                /> */}
                <MainMenu></MainMenu>
            </Sider>
            {/* 右边侧边栏 */}
            <Layout className="site-layout">
                {/* 右边头部 */}
                <Header style={{ paddingLeft: '16px', height: 64, background: '#fff' }} >
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header >
                {/* 右边内容 */}
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    {/* 窗口部分 */}
                    <Outlet />
                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};
export default View;
