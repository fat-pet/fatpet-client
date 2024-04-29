import { getPetList } from '@/api/axios'
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa"
import React, { useEffect } from 'react'

interface Props{
  name : string;
  breed : string;
  date : string;
}

export default function PetListComponent({name, breed, date} : Props) {
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
          <p className='text-lg font-bold'>이름 : {name}</p>
          <p className='text-sm'>품종 : {breed}</p>
          <p className='text-sm'>생일 : {date}</p>
        </div>
      </div>
  )
}
