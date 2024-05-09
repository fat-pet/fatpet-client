import { Link, Outlet } from 'react-router-dom';
import { FaClipboardList, FaUserGear } from 'react-icons/fa6';
import { MdOutlineSpeakerNotes } from 'react-icons/md';

export default function BottomNav() {
    return (
        <div className="h-layout-footer border-t-2 w-full flex justify-between font-bold  tracking-tighter xxsm:text-lg">
            <Link
                to="board"
                className="flex flex-col items-center justify-center w-1/3 border-r-2"
            >
                <MdOutlineSpeakerNotes className="text-2xl xxsm:text-3xl" />{' '}
                커뮤니티
            </Link>
            <Link
                to="/dashboard"
                className="flex flex-col items-center justify-center w-1/3 border-r-2"
            >
                <FaClipboardList className="text-2xl xxsm:text-3xl" />
                대시보드
            </Link>
            <Link
                to="/dashboard/editMember"
                className="flex flex-col items-center justify-center w-1/3"
            >
                <FaUserGear className="text-2xl xxsm:text-3xl" /> 내 정보 관리
            </Link>
        </div>
    );
}
