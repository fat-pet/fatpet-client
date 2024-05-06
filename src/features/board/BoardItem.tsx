import { getPost } from '@/api/axios'
import {BoardProps } from '@/types/types';
import React, { useEffect, useState } from 'react'

export default function BoardItem() {


  return (
    <div className='w-full h-16 border-b-2 flex items-center justify-between tracking-tighter px-3'>
        {/* <div>
            <p>{boardData ? boardData.title : '게시글 제목'}</p>
            <p className='text-sm'>조회수 : 3250</p>
        </div>
        <div>
            <p>작성자 : {boardData ? boardData.member.nickname : '이상연'}</p>
            <p className='text-sm'>작성일 : {boardData ? boardData.createdDate : '2024-05'}</p>
        </div> */}
        <div>
            <p>{'게시글 제목'}</p>
            <p className='text-sm'>조회수 : 3250</p>
        </div>
        <div>
            <p>작성자 : {'이상연'}</p>
            <p className='text-sm'>작성일 : {'2024-05'}</p>
        </div>
    </div>
  )
}
