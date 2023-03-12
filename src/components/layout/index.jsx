/*
 * @Author       : topfivegao
 * @Date         : 2023-03-07 19:17:03
 * @FilePath     : /vite-react-antd5/src/components/layout/index.jsx
 * @LastEditTime : 2023-03-11 12:09:12
 * @Description  : 有空一起吃个饭啊!	微信联系 treeshaking666
 * 
 * Copyright (c) 2023 by topfivegao, All Rights Reserved. 
 */
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TeamOutlined,
    TrophyOutlined,
    ProfileOutlined,
    OrderedListOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Space, theme, Dropdown, message } from 'antd';
import ContentBreadcrumb from '@/components/breadcrumb'
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'
import logo from '@/assets/vite-react-antd5.png'


const { Header, Sider, Content } = Layout;
const MyLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const headerItems = [
        {
            key: 'profile',
            label: '个人中心',
        },
        {
            key: 'login',
            label: '退出登录'
        },
    ];

    const headerMenuItemClick = ({ key }) => {
        message.info(`跳转至${key}`);
        navigate(key)
    };

    const menuList = [
        {
            key: '/students',
            icon: <TeamOutlined />,
            label: '学生管理',
            children: [
                {
                    key: '/students/list',
                    icon: <OrderedListOutlined />,
                    label: '学生列表',
                },
                {
                    key: '/students/types',
                    icon: <OrderedListOutlined />,
                    label: '学生分类',
                }
            ]
        },
        {
            key: '/classes',
            icon: <TrophyOutlined />,
            label: '班级管理',
            children: [
                {
                    key: '/classes/list',
                    icon: <OrderedListOutlined />,
                    label: '班级列表',
                },
                {
                    key: '/classes/members',
                    icon: <OrderedListOutlined />,
                    label: '班级人员',
                }
            ]
        },
        {
            key: '/courses',
            icon: <ProfileOutlined />,
            label: '课程管理',
            children: [
                {
                    key: '/courses/list',
                    icon: <OrderedListOutlined />,
                    label: '课程列表',
                },
                {
                    key: '/courses/classtime',
                    icon: <OrderedListOutlined />,
                    label: '课程时间',
                }
            ]
        },
        {
            key: '/todos',
            icon: <HeartOutlined />,
            label: '预留菜单',
        }
    ]
    // 获取 menu 组件中所有的【有效】点击路由地址 keys
    const getMenuKeys = (menus, arr) => {
        menus.forEach(element => {
            if (element.children) {
                getMenuKeys(element.children, arr)
            } else {
                arr.push(element.key)
            }
        });
        return arr
    }

    // 提供动态的默认选中项，实现页面刷新会显示对应的导航菜单栏
    /**
     * 
     * @param {*} selectKey 当前选中的item ，其值应该从 location 对象的 pathname 获得
     * @param {*} itemKeys 所有能触发 url 跳转的 menuItem 的 key 值集合
     * @returns 当前选中的 item 的 key 值
     */
    const mapMenuItemToUrl = (selectKey, itemKeys) => {
        for (const item of itemKeys) {
            if (item === selectKey) {
                return item
            }
        }
        return selectKey
    }

    const defaultSelectKeys = [mapMenuItemToUrl(pathname, getMenuKeys(menuList, Array(0)))]
    const defaultOpenKeys = Array(0)
    defaultOpenKeys.push('/' + defaultSelectKeys[0].split('/')[1])

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div>
                    <img src={logo}
                        style={{ padding: '0.5rem 0.5rem 0 0.5rem', borderRadius: '100%', width: '100%', height: '12.5rem', display: 'block', margin: '0 auto' }}
                        onClick={() => {
                            navigate('/')
                        }}
                    />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={defaultSelectKeys}
                    // 这里一定要是 具有 children 的 item 才会生效！！！卡一天的结果！！！
                    defaultOpenKeys={defaultOpenKeys}
                    items={menuList}
                    onClick={({ key }) => {
                        navigate(key)
                    }}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        paddingLeft: '1rem'
                    }}
                >
                    <Space>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        学生管理系统
                    </Space>
                    <Dropdown
                        menu={{
                            items: headerItems,
                            onClick: headerMenuItemClick
                        }}
                        placement='bottomRight'
                        style={{ backgroundColor: 'blue' }}
                    >
                        <a onClick={(e) => e.preventDefault()}
                            style={{
                                float: 'right',
                                margin: '0 1rem 0 0'
                            }}
                        >
                            <Space>
                                <img src={logo}
                                    style={
                                        {
                                            borderRadius: '100%',
                                            width: '2.5rem',
                                            height: '2.5rem'
                                        }
                                    }
                                />
                                用户123
                            </Space>
                        </a>
                    </Dropdown>
                </Header>


                <Content
                    style={{
                        margin: '12px 16px 24px 16px',
                        padding: '0 0 24px 0',
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ContentBreadcrumb style={{ margin: '0 0 24px 0' }} />
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default MyLayout;