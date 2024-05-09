import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BasicLayout from './layouts/Basic-layout.tsx';
import Main from './pages/Main.tsx';
import BasicInformation from './pages/BasicInformation.tsx';
import DetailInformation from './pages/DetailInformation.tsx';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: '/signin', element: <Login /> },
      { path: '/signup', element: <Join /> },
      { path: '/inputdata', element: <BasicInformation /> },
      { path: '/inputdata/detail', element: <DetailInformation /> },
      { path: '/result', element: <Result /> },
      { path: '/result/solution', element: <Solution /> },
    ],
  },
  {
    path: '/',
    element: <MemberLayout />,
    children: [
      { path: '/dashboard', element: <DashBoard /> },
      { path: '/dashboard/editpet', element: <EditPet /> },
      { path: '/dashboard/resultlist', element: <PetResultList /> },
      { path: '/dashboard/petlist', element: <PetList /> },
      { path: '/petlist/createpet', element: <CreatePet /> },
      { path: '/dashboard/editmember', element: <EditMember /> },
      { path: '/board', element: <Board /> },
      { path: '/post/new', element: <BoardCreate /> },
      { path: '/post/:id', element: <BoardContent /> },
      { path: '/post/edit/:id', element: <BoardEdit /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
