import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@/routes'
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>
)
