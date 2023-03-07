/**
 * @Author       : topfivegao
 * @Date         : 2023-03-07 18:42:17
 * @FilePath     : /vite-react-antd5/src/routes/index.js
 * @LastEditTime : 2023-03-07 18:42:17
 * @Description  : 有空一起吃个饭啊!	微信联系 treeshaking666
 * 
 * @Copyright (c) 2023 by topfivegao, All Rights Reserved. 
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '@/App'
import Students from '@/pages/students/home'

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/students' element={<Students />}></Route>
        </Routes>
    </BrowserRouter>
}