import { Link } from 'react-router-dom';
import { FaClipboardList, FaUserGear } from 'react-icons/fa6';
import { MdOutlineSpeakerNotes } from 'react-icons/md';

const BottomNav = () => {
  return (
<<<<<<< HEAD
    <div className='h-layout-footer border-t-2 w-full flex justify-evenly font-bold px-5 tracking-tighter xxsm:text-lg'>
      <Link to='board' className='flex flex-col items-center justify-center w-1/3 '>
        <MdOutlineSpeakerNotes className='text-2xl xxsm:text-3xl' /> 커뮤니티
      </Link>
      <Link to='/dashboard' className='flex flex-col items-center justify-center w-1/3'>
        <FaClipboardList className='text-2xl xxsm:text-3xl' />
=======
    <div className="h-layout-footer border-t-2 w-full flex justify-between font-bold  tracking-tighter xxsm:text-lg">
      <Link
        to="board"
        className="flex flex-col items-center justify-center w-1/3 border-r-2"
      >
        <MdOutlineSpeakerNotes className="text-2xl xxsm:text-3xl" /> 커뮤니티
      </Link>
      <Link
        to="/dashboard"
        className="flex flex-col items-center justify-center w-1/3 border-r-2"
      >
        <FaClipboardList className="text-2xl xxsm:text-3xl" />
>>>>>>> ca73cb4d08e20b282fed2c024a5b571bdb83f5bf
        대시보드
      </Link>
      <Link
        to="/member/edit"
        className="flex flex-col items-center justify-center w-1/3"
      >
        <FaUserGear className="text-2xl xxsm:text-3xl" /> 내 정보 관리
      </Link>
    </div>
  );
};

export default BottomNav;
