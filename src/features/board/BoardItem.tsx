import {BoardProps } from '@/types/types';
import { useNavigate } from 'react-router-dom';

export default function BoardItem({boardData} : { boardData : BoardProps}) {
  const naviagte = useNavigate();


  return (
    <div onClick={()=>naviagte(`/board/${boardData.id}`)} className='w-full h-16 border-b-2 flex flex-col justify-center tracking-tighter'>
        <div className='font-bold'>
          {boardData ? boardData.title : '게시글 제목'}
        </div>
        <div className='flex text-sm text-gray-400'>
            <p >{boardData ? `${boardData.createdDate[0]}/0${boardData.createdDate[1]}/0${boardData.createdDate[2]}` : '2024-05'}</p>
            <p className='mx-2'>|</p>
            <p>{boardData ? boardData.member.nickname : '이상연'}</p>
        </div>
    </div>
  )
}
