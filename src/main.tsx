import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasicLayout from './layouts/Basic-layout.tsx';
import Main from './pages/Main.tsx';
// import Diagnose from './pages/Diagnose.tsx';
import Result from './pages/Result.tsx';
import Solution from './pages/Solution.tsx';
import Login from './pages/Login.tsx';
import EditPet from './pages/EditPet.tsx';
import PetList from './pages/PetList.tsx';
import PetResultList from './pages/PetResultList.tsx';
import EditMember from './pages/EditMember.tsx';
import Join from './pages/Join.tsx';
import DashBoard from './pages/DashBoard.tsx';
import CreatePet from './pages/CreatePet.tsx';
import MemberLayout from './layouts/Member-layout.tsx';
import Board from './pages/Board.tsx';
import BoardCreate from './pages/BoardCreate.tsx';
import BoardContent from './pages/BoardContent.tsx';
import BoardEdit from './pages/BoardEdit.tsx';
import DiagnosePet from './pages/DiagnosePet.tsx';
import AdminLayout from './layouts/Admin-layout.tsx';
import Admin from './pages/Admin.tsx';
import AdminEditBreed from './pages/AdminEditBreed.tsx';
import AdminAddBreed from './pages/AdminAddBreed.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: '/signin', element: <Login /> },
      { path: '/signup', element: <Join /> },
      // { path: '/trial', element: <Diagnose /> },
    ],
  },
  {
    path: '/',
    element: <MemberLayout />,
    children: [
      { path: '/dashboard', element: <DashBoard /> },
      { path: '/pet/edit', element: <EditPet /> },
      { path: '/pet/resultlist', element: <PetResultList /> },
      { path: '/pet/list', element: <PetList /> },
      { path: '/pet/new', element: <CreatePet /> },
      { path: '/diagnose/:id', element: <DiagnosePet /> },
      { path: '/diagnose/result/:id', element: <Result /> },
      { path: '/diagnose/result/solution', element: <Solution /> },
      { path: '/member/edit', element: <EditMember /> },
      { path: '/board', element: <Board /> },
      { path: '/post/new', element: <BoardCreate /> },
      { path: '/post/:id', element: <BoardContent /> },
      { path: '/post/edit/:id', element: <BoardEdit /> },
    ],
  },

  {
    path: '/',
    element: <AdminLayout />,
    children: [
      { path: '/admin', element: <Admin /> },
      { path: '/admin/edit/breed', element: <AdminEditBreed /> },
      { path: '/admin/add/breed', element: <AdminAddBreed /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
