import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav-layout';
import WithAuth from '@/utils/WithAuth';

// eslint-disable-next-line react-refresh/only-export-components
const MemberLayout = () => {
  return (
    <div className="max-w-[480px] shadow w-full h-full ">
      <div className="h-layout-main pt-14 px-2 overflow-auto scrollbar-hidden">
        <Outlet />
      </div>
      <div className="h-layout-footer">
        <BottomNav />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default WithAuth(MemberLayout);
