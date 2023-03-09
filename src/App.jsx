import MyLayout from '@/components/layout'
import { Route, Routes, useLocation } from 'react-router-dom'
import StudentsHome from '@/pages/students/home'
import StudentsType from '@/pages/students/studentType'
import ClassesList from '@/pages/classes/home'
import ClassesMembers from '@/pages/classes/members'
import CoursesList from '@/pages/courses/home'
import CoursesTime from '@/pages/courses/time'
import Todos from '@/pages/todos'


export default function App() {
  const { pathname } = useLocation()
  return (
    <MyLayout >
      {
        pathname === '/'
          ?
          <>欢迎使用 vite4 + react18 + antd5 搭建的管理系统！</>
          :
          <Routes>
            <Route path='/students/list' element={<StudentsHome />}></Route>
            <Route path='/students/types' element={<StudentsType />}></Route>
            <Route path='/classes/list' element={<ClassesList />}></Route>
            <Route path='/classes/members' element={<ClassesMembers />}></Route>
            <Route path='/courses/list' element={<CoursesList />}></Route>
            <Route path='/courses/classtime' element={<CoursesTime />}></Route>
            <Route path='/todos' element={<Todos />}></Route>
          </Routes>
      }
    </MyLayout>
  )
}