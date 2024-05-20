import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const AdminLayout = () => {
  return (
    <div className="max-w-[480px] shadow w-full h-full ">
      <div className="h-full pt-14 px-2 overflow-auto scrollbar-hidden">
        <Outlet />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AdminLayout;
