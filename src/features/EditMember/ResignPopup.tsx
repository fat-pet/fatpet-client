import { resign } from '@/api/axios';
import { useNavigate } from 'react-router-dom';

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResignPopup({ setOpen }: Props) {
  const navigate = useNavigate();
  const handleResign = () => {
    resign().then(() => {
      setOpen(false);
      navigate('/');
    });
  };

  return (
    <div className="w-11/12 border aspect-[3/1] z-10 p-10 bg-white rounded-lg">
      <div className="w-full flex flex-col items-center">
        <p className="font-bold text-xl text-red-400 mb-5">회원 탈퇴</p>
        <p>회원 탈퇴를 하게 되면</p>
        <p>기존에 있던 정보를 복구 할 수 없습니다</p>
        <p>정말로 탈퇴하시겠습니까?</p>
      </div>
      <div className="w-full flex justify-evenly mt-8">
        <button
          onClick={handleResign}
          className="w-1/3 aspect-[3/1] border text-red-400 font-bold rounded-lg hover:bg-gray-100"
        >
          탈퇴
        </button>
        <button
          onClick={() => setOpen(false)}
          className="w-1/3 aspect-[3/1] border rounded-lg hover:bg-gray-100"
        >
          취소
        </button>
      </div>
    </div>
  );
}
