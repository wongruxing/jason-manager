
import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from "react-router-dom"
type MenuItem = Required<MenuProps>['items'][number];

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
// 登录请求到数据之后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        label: '栏目 1',
        key: '/page1',
        icon: <PieChartOutlined />
    },
    {
        label: '栏目 2',
        key: '/page2',
        icon: <DesktopOutlined />
    },
    {
        label: '栏目 3',
        key: '/page3',
        icon: <UserOutlined />,
        children: [
            {
                label: '栏目 301',
                key: '/page3/page301',
            },
            {
                label: '栏目 302',
                key: '/page3/page302',
            },
            {
                label: '栏目 303',
                key: '/page3/page303',
            },

        ]
    },
    {
        label: '栏目 4',
        key: '/page4',
        icon: <TeamOutlined />,
        children: [
            {
                label: '栏目 401',
                key: '/page4/page401',
            },
            {
                label: '栏目 402',
                key: '/page4/page402',
            },
            {
                label: '栏目 403',
                key: '/page4/page403',
            },

        ]
    },
    {
        label: '栏目 5',
        key: '/page5',
        icon: <FileOutlined />
    },

]
const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const currentRoute = useLocation();
    console.log(currentRoute.pathname);//currentRoute.pathname “/page3/page301”

    const menuClick = (e: { key: string }) => {
        // console.log("点击菜单", e.key);
        //  点击跳转到对应的路由 编程式导航跳转 利用到一个hook
        navigateTo(e.key)

    }
    //拿着currentRoute.pathname跟items数组的每一项的children的key值进行对比，如果找到了相等 就要它上一级的key
    // 这个key给到openKeys数组的元素 作为初始值 
    let firstOpenKey: string = '';
    // 这里进行对比 find
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname
    }
    for (let i = 0; i < items.length; i++) {
        // 判断
        if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenKey = items[i]!.key as string;
            break;

        }
    }
    // items[??]['children'].find(findKey) //如果找到拿到的 就是找到的这个对象 转布尔值就是true 如果找不到布尔值就是false

    // 设置展开项的初始值
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleOpenChange = (keys: string[]) => {
        // 什么时候执行函数里面的代码？展开和回收某项菜单的时候执行这里的代码
        console.log(keys);//keys是一个数组 记录当前哪一项是展开的（用key开记录）
        // 把这个数组修改成最后一项 因为只要一项是展开的 就是我刚刚点击的这一项
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu theme="dark"
            // defaultSelectedKeys表示当前样式选中项的key
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            // item 是菜单下的数据
            items={items}
            onClick={menuClick}
            // 某项菜单展开回收的事件
            onOpenChange={handleOpenChange}
            // 当前菜单展开项目的keys数组
            openKeys={openKeys}
        />
    )
}
export default Comp;