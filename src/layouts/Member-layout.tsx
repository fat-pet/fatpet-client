import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav-layout';
import WithAuth from '@/utils/WithAuth';

<<<<<<< HEAD
export default function MemberLayout() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate('/signin');
        }
    }, []);

    return (
        <div className="max-w-[480px] border-x-2 w-full h-full ">
            <div className="h-layout-main pt-12 px-8 overflow-auto scrollbar-hidden">
                <Outlet />
            </div>
            <BottomNav />
        </div>
    );
}
=======
// eslint-disable-next-line react-refresh/only-export-components
const MemberLayout = () => {
  return (
    <div className="max-w-[480px] border-x-2 w-full h-full ">
      <div className="h-layout-main pt-12 px-8 overflow-auto scrollbar-hidden">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default WithAuth(MemberLayout);
>>>>>>> ca73cb4d08e20b282fed2c024a5b571bdb83f5bf
