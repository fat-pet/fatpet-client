// import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function PetNotStatus() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-sm mb-3 mr-56">현재 선택 중인 펫</p>
            <div className="w-5/6 h-40 bg-blue-400 rounded-xl px-5 text-white flex flex-col justify-center items-center">
                <p className='text-xl fo'>등록된 펫이 없습니다</p>
                <button className='border-2 rounded-lg w-1/3 -mb-3 mt-2' onClick={()=>navigate('/petList/createPet')}>등록하기</button>
            </div>
        </div>
    )
}
