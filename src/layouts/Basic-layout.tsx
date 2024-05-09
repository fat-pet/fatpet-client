import { Outlet } from 'react-router-dom';

export default function BasicLayout() {
  return (
    <div className='max-w-[480px] shadow w-full h-full overflow-scroll scrollbar-hidden pt-12 px-8'>
      <Outlet />
    </div>
  );
}
