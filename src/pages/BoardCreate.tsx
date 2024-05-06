import { postPost } from '@/api/axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BoardCreate() {
    const TitleRef = useRef<HTMLInputElement>(null);
    const ContentRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();

    const handleSubmit=(event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        postPost(TitleRef.current!.value, ContentRef.current!.value)
        .then(()=>{
            navigate(-1)
        })
    }

    return (
        <>
            <header className='text-lg font-bold tracking-tighte'>
                <p>게시글 작성</p>
            </header>
            
            <form className='border-t-2 mt-5 w-full h-full' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='제목' 
                    className='text-2xl font-bold w-full  py-3' 
                    ref={TitleRef}
                />
                <textarea 
                    placeholder='내용을 입력해주세요'
                    className='w-full h-3/4 border-2'
                    ref={ContentRef}
                    />
                <button className='w-1/3 aspect-[3/1] border-2 rounded-lg float-end'>
                    작성하기
                </button>
            </form>
        </>
    )
}
