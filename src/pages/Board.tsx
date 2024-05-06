import BoardItem from '@/features/board/BoardItem';
import React from 'react'
import { CiSearch } from "react-icons/ci";
export default function Board() {
  return (
    <div>
        <header className='text-lg font-bold tracking-tighter mb-3 flex justify-between'>
          <p>전체 게시판</p>
            <input type="text" className='w-1/2 border-2 round relative'/>
            <CiSearch className='absolute top-0'/>
        </header>
        <hr />
        <div className='flex flex-col w-full'>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
        </div>
    </div>
  )
}
