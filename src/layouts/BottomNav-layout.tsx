import { Link, useLocation } from 'react-router-dom';
import { FaClipboardList, FaUserGear } from 'react-icons/fa6';
import { MdOutlineSpeakerNotes } from 'react-icons/md';

const BottomNav = () => {
  const location = useLocation();
  const curPath = location.pathname;

  return (
    <div className="h-layout-footer border-t w-full flex justify-between font-semibold xxsm:text-lg">
      <Link
        to="/board"
        className={`text-xs flex flex-col items-center justify-center w-1/3 ${curPath == '/board' ? 'opacity-100' : 'opacity-30'}`}
      >
        <MdOutlineSpeakerNotes className="text-xl xxsm:text-xl mb-1" />
        커뮤니티
      </Link>
      <Link
        to="/dashboard"
        className={`text-xs flex flex-col items-center justify-center w-1/3 ${curPath == '/dashboard' ? 'opacity-100' : 'opacity-30'}`}
      >
        <FaClipboardList className="text-xl xxsm:text-xl mb-1" />
        대시보드
      </Link>
      <Link
        to="/member/edit"
        className={`text-xs flex flex-col items-center justify-center w-1/3 ${curPath == '/member/edit' ? 'opacity-100' : 'opacity-30'}`}
      >
        <FaUserGear className="text-xl xxsm:text-xl mb-1" /> 내 정보 관리
      </Link>
    </div>
  );
};

export default BottomNav;
