/*
 * @Author       : topfivegao
 * @Date         : 2023-03-10 12:31:21
 * @FilePath     : /vite-react-antd5/src/pages/login/index.jsx
 * @LastEditTime : 2023-03-10 13:41:48
 * @Description  : 有空一起吃个饭啊!	微信联系 treeshaking666
 * 
 * Copyright (c) 2023 by topfivegao, All Rights Reserved. 
 */
import { Col, Row, Card, Form, Input, Checkbox, Button, message } from 'antd';
import logo from '@/assets/vite-react-antd5.png'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    // 服务端登录 api , 此处暂时就本地校验密码
    const onFinish = (values) => {
        console.log('登录表单信息:', values)
        if (values.username === 'admin' && values.password === 'admin') {
            navigate('/')
        } else {
            message.info('账号或密码有误!!!')
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('登录表单信息:', errorInfo)
        message.info('登录失败！！！')
    };

    return (<>
        <Row align={'middle'} style={{ height: '100vh' }}>
            <Col span={8} offset={8}>
                <img
                    src={logo}
                    style={{ borderRadius: '100%', width: 300, height: 300, margin: '0 auto', display: 'block' }}

                />
                <Card
                    title="vite4 + react18 + antd5 通用后台系统"
                    bordered={false}
                    headStyle={{ textAlign: 'center' }}
                    style={{
                        width: 400,
                        margin: '0 auto'
                    }}
                >
                    <Form
                        name="basic"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 18,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input placeholder='默认用户名 admin' />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password placeholder='默认密码 admin' />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 6,
                                span: 18,
                            }}
                        >
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 18,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    </>)
}

export default Login