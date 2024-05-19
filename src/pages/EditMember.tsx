import EditNickName from '@/features/editMember/EditNickName';
import ResignPopup from '@/features/editMember/ResignPopup';
import { useTokenStore } from '@/stores/useStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const style =
  'text-lg hover:cursor-pointer font-medium mb-3 py-1 hover:opacity-50 transition-opacity';

export default function EditMember() {
  const [openNick, setOpenNick] = useState<boolean>(false);
  const [openResign, setOpenResign] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setToken } = useTokenStore();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('petData');
    setToken('');
    navigate('/');
  };

  return (
    <div className="w-full h-full relative px-4">
      <header className="mb-14">
        <h2 className="text-2xl font-bold">내 정보 관리</h2>
      </header>
      <div onClick={() => handleLogout()} className={style}>
        로그아웃
      </div>
      <div onClick={() => setOpenNick(true)} className={style}>
        내 정보 수정하기
      </div>
      <div className={style}>비밀번호 변경하기</div>
      <button
        onClick={() => setOpenResign(true)}
        className="text-red-600 text-lg hover:cursor-pointer font-medium mb-2 py-1 hover:opacity-50 transition-opacity"
      >
        회원 탈퇴하기
      </button>

      {openNick ? (
        <div className="z-30 absolute top-32 w-full flex justify-center">
          <EditNickName setOpen={setOpenNick} />
        </div>
      ) : (
        ''
      )}

      {openResign ? (
        <div className="z-30 absolute top-32 w-full flex justify-center">
          <ResignPopup setOpen={setOpenResign} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
