import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BasicLayout from './layouts/Basic-layout.tsx'
import Main from './pages/Main.tsx'
import BasicInformation from './pages/BasicInformation.tsx'
import DetailInformation from './pages/DetailInformation.tsx'
import Result from './pages/Result.tsx'
import Solution from './pages/Solution.tsx'
import Login from './pages/Login.tsx'
import MyPage from './pages/MyPage.tsx'
import EditPet from './pages/EditPet.tsx'
import PetList from './pages/PetList.tsx'
import PetResultList from './pages/PetResultList.tsx'
import EditMember from './pages/EditMember.tsx'
import Join from './pages/Join.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <BasicLayout/>,
    children : [
      {index: true, element:<Main/>},
      {path: '/login', element:<Login/>},
      {path: '/join', element:<Join/>},
      {path: '/inputData', element:<BasicInformation/>},
      {path: '/inputData/detail', element:<DetailInformation/>},
      {path: '/result', element:<Result/>},
      {path: '/result/solution', element:<Solution/>},
      {path: '/mypage', element:<MyPage/>},
      {path: '/editPet', element:<EditPet/>},
      {path: '/resultList', element:<PetResultList/>},
      {path: '/petList', element:<PetList/>},
      {path: '/editMember', element:<EditMember/>},
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
