/*
 * @Author       : topfivegao
 * @Date         : 2023-03-07 19:17:03
 * @FilePath     : /vite-react-antd5/src/components/layout/index.jsx
 * @LastEditTime : 2023-03-07 22:51:42
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
    HeartOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import './index.css'
import logo from '@/assets/vite-react-antd5.png'

const { Header, Sider, Content } = Layout;
const MyLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <img src={logo} style={{ borderRadius: '20px', width: '50%', display: 'block', margin: '10px auto' }} />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '/students',
                            icon: <TeamOutlined />,
                            label: '学生管理',
                            children: [
                                {
                                    key: '1',
                                    icon: <OrderedListOutlined />,
                                    label: '学生列表',
                                },
                                {
                                    key: '11',
                                    icon: <OrderedListOutlined />,
                                    label: '学生分类',
                                }
                            ]
                        },
                        {
                            key: '2',
                            icon: <TrophyOutlined />,
                            label: '班级管理',
                            children: [
                                {
                                    key: '21',
                                    icon: <OrderedListOutlined />,
                                    label: '班级列表',
                                },
                                {
                                    key: '211',
                                    icon: <OrderedListOutlined />,
                                    label: '班级人员',
                                }
                            ]
                        },
                        {
                            key: '3',
                            icon: <ProfileOutlined />,
                            label: '课程管理',
                            children: [
                                {
                                    key: '31',
                                    icon: <OrderedListOutlined />,
                                    label: '课程列表',
                                },
                                {
                                    key: '311',
                                    icon: <OrderedListOutlined />,
                                    label: '课程时间',
                                }
                            ]
                        },
                        {
                            key: '4',
                            icon: <HeartOutlined />,
                            label: '预留菜单',
                        }
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default MyLayout;