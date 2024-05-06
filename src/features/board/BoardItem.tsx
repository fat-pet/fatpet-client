import React from 'react'

export default function BoardItem() {
  return (
    <div className='w-full h-16 border-b-2 flex justify-center flex-col'>
        <p className='tracking-tighter'>게시글 제목</p>
        <p className='tracking-tighter text-sm'>조회수 : 3250</p>
    </div>
  )
}
