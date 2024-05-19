import { BoardProps } from '@/types/types';
import { useNavigate } from 'react-router-dom';

export default function BoardItem({ boardData }: { boardData: BoardProps }) {
  const navigate = useNavigate();

  function truncateText(text: string) {
    if (text.length > 35) {
      return text.slice(0, 35) + '... ';
    } else {
      return text;
    }
  }

  return (
    <div
      onClick={() => navigate(`/post/${boardData.id}`)}
      className="w-full p-4 flex flex-col justify-center cursor-pointer mb-1 hover:bg-gray-50 transition-colors font-medium"
    >
      <div className="text-lg font-semibold mb-2">
        {boardData ? boardData.title : '게시글 제목'}
      </div>
      <div className="mb-4 text-sm">
        {boardData ? truncateText(boardData.content) : '게시글 내용'}
      </div>
      <div className="flex text-gray-500 justify-between text-sm">
        <p>{boardData ? boardData.member.nickname : '이상연'}</p>
        <p>{boardData ? boardData.createdDate : '24.05.27 오후 1:40'}</p>
      </div>
    </div>
  );
}
