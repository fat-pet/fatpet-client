import { putPost } from '@/api/axios';
import React, { useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FaCheck , FaUser,  } from "react-icons/fa";
import { CommentProps } from '@/types/types';


export default function BoardEdit()  {
    const {id} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);


    const handleCheck=()=>{
        if(id){
            putPost(Number(id), titleRef.current!.value, contentRef.current!.value )
            .then(()=>navigate(`/board/${id}`))
        }
    }


  return (
      <div className='relative h-full'>
            <header>
                <p className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <FaUser className='text-4xl rounded-lg border-gray-500 border-2'/> 
                        <p className='flex flex-col ml-2'>
                            <p className='font-bold text-lg'>{data?.nickname}</p>
                            <p className='text-gray-400'>{`${data?.createdDate[0]}/${data?.createdDate[1]}/${data?.createdDate[2]}`}</p>
                        </p>    
                    </div>
                    <div>
                        <button onClick={handleCheck}>
                            <FaCheck className='text-2xl'/>
                        </button>
                    </div>
                </p>
                <input 
                className='text-xl font-bold tracking-tighter mt-3 w-full'
                defaultValue={data?.title}
                ref={titleRef}
                />
            </header>

            <textarea 
            className='mt-3 w-full h-5/6'
            defaultValue={data?.content} 
            ref={contentRef}/>

      </div>    
  )
}
