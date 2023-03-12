/*
 * @Author       : topfivegao
 * @Date         : 2023-03-11 11:00:54
 * @FilePath     : /vite-react-antd5/src/components/breadcrumb/index.jsx
 * @LastEditTime : 2023-03-12 12:02:22
 * @Description  : 有空一起吃个饭啊!	微信联系 treeshaking666
 * 
 * Copyright (c) 2023 by topfivegao, All Rights Reserved. 
 */
import { Breadcrumb } from 'antd';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { DivWrapper } from './styled';


const urls = [
    '/students/list',
    '/students/types',
    '/classes/list',
    '/classes/members',
    '/courses/list',
    '/courses/classtime',
    '/todos',
]

const NavBreadcrumb = () => {
    const location = useLocation();
    const { pathname } = location
    const pathSnippets = pathname.split('/').filter(i => i)
    let items = []
    if (pathname.indexOf('/list') !== -1 || pathSnippets.length === 1) {
        items = [
            {
                title: <Link to={pathname}>{pathSnippets[0]}</Link>
            }
        ]
    } else if (pathSnippets.length > 0) {
        items = [
            {
                title: <Link to={'/' + pathSnippets[0] + '/list'}>{pathSnippets[0]}</Link>
            },
            {
                title: <Link to={pathname}>{pathSnippets[1]}</Link>
            },
        ]
    }

    return (<DivWrapper>
        <div className="demo">
            <Breadcrumb items={items} />
        </div>
    </DivWrapper>);
}
export default NavBreadcrumb;