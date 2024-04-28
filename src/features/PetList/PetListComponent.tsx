import { getPetList } from '@/api/axios'
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa"
import React, { useEffect } from 'react'

export default function PetListComponent() {
    useEffect(()=>{
        getPetList()
        .then((data)=>console.log(data))
    },[])
  return (
      <div className='w-5/6 h-44 rounded-xl bg-blue-400 mb-20 flex items-center px-10 text-white hover:cursor-pointer'>
        {
          
        }
        <FaDog className='w-24 h-24 mr-5'/>
        <div>
          <p className='text-lg font-bold'>이름 : 마루</p>
          <p className='text-sm'>푸들 7세</p>
        </div>
      </div>
  )
}
