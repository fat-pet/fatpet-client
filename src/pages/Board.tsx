import { getPost } from '@/api/axios';
import BoardItem from '@/features/board/BoardItem';
import { BoardProps } from '@/types/types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
  const [boardData, setBoardData] = useState<BoardProps[]>([]);

  useEffect(() => {
    getPost().then((res) => {
      setBoardData(res.data.body);
      console.log(res.data.body);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header className="text-lg font-bold mb-2 flex justify-between px-4">
        <h2 className="text-2xl font-bold">팻펫 커뮤니티</h2>
      </header>
      <Link
        to="/post/new"
        className="text-sm mb-6 float-end bg-green-100 rounded-md mr-4 px-3 py-1.5 text-green-600 font-semibold hover:opacity-70 transition-opacity"
      >
        글 작성하기
      </Link>
      <div className="flex flex-col w-full">
        {boardData.length != 0 ? (
          boardData.map((item: BoardProps) => <BoardItem boardData={item} />)
        ) : (
          <>
            {/* <BoardItem
              boardData={{
                id: 1,
                title: '코숏 다이어트 사료 추천해 주세요',
                member: {
                  email: '이메일',
                  nickname: 'kkbk',
                  loginId: 'kkbk',
                },
                content:
                  '저희 집 뚱냥이들 사료를 바꾸려하는데, 다들 어떤 사료 드시나요?',
                createdDate: [2024, 5, 19, 12, 3, 23, 46634000],
              }}
            /> */}
          </>
        )}
      </div>
    </div>
  );
}
