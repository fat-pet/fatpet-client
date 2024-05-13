import { BoardProps } from '@/types/types';
import { useNavigate } from 'react-router-dom';

export default function BoardItem({ boardData }: { boardData: BoardProps }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/post/${boardData.id}`)}
      className="w-full h-16 border-b-2 flex flex-col justify-center tracking-tighter hover:bg-gray-100 cursor-pointer"
    >
      <div className="font-bold">
        {boardData ? boardData.title : '게시글 제목'}
      </div>
      <div className="flex text-sm text-gray-400">
        <p>
          {boardData
            ? `${boardData.createdDate[0]}/0${boardData.createdDate[1]}/0${boardData.createdDate[2]}`
            : '2024-05'}
        </p>
        <p className="mx-2">|</p>
        <p>{boardData ? boardData.member.nickname : '이상연'}</p>
      </div>
    </div>
  );
}
