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
import EditPet from './pages/EditPet.tsx'
import PetList from './pages/PetList.tsx'
import PetResultList from './pages/PetResultList.tsx'
import EditMember from './pages/EditMember.tsx'
import Join from './pages/Join.tsx'
import DashBoard from './pages/DashBoard.tsx'
import CreatePet from './pages/CreatePet.tsx'
import MemberLayout from './layouts/Member-layout.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <BasicLayout/>,
    children : [
      {index: true, element:<Main/>},
      {path: '/signin', element:<Login/>},
      {path: '/signup', element:<Join/>},
      {path: '/inputData', element:<BasicInformation/>},
      {path: '/inputData/detail', element:<DetailInformation/>},
      {path: '/result', element:<Result/>},
      {path: '/result/solution', element:<Solution/>},
      
    ]
  },

  {
    path: '/',
    element : <MemberLayout/>,
    children : [
      {path: '/dashboard', element:<DashBoard/>},
      {path: '/dashboard/editPet', element:<EditPet/>},
      {path: '/resultList', element:<PetResultList/>},
      {path: '/dashboard/petList', element:<PetList/>},
      {path: '/petList/createPet', element:<CreatePet/>},
      {path: '/dashboard/editMember', element:<EditMember/>},
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
