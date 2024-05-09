import { getPost } from '@/api/axios';
import BoardItem from '@/features/board/BoardItem';
import { BoardProps } from '@/types/types';
import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Board() {
  const [boardData, setBoardData] = useState<BoardProps[]>();
  useEffect(() => {
    getPost().then((res) => {
      setBoardData(res.data.body);
      console.log(res.data.body);
    });
  }, []);
  return (
    <div>
      <header className="text-lg font-bold tracking-tighter mb-3 flex justify-between ">
        <p>전체 게시판</p>
      </header>
      <Link
        to="/post/new"
        className="w-1/4 mb-2 border-2 rounded-lg hover:bg-slate-200 float-end flex justify-center"
      >
        글쓰기
      </Link>
      <div className="flex flex-col w-full border-t-2">
        {boardData !== undefined ? (
          boardData.map((item: BoardProps) => {
            return <BoardItem boardData={item} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
