import React from 'react'
import { FaClipboardList, FaStethoscope } from 'react-icons/fa6'

export default function Diagnose() {
  return (
    <div className="w-full flex justify-around mt-10">
    <button className="w-1/3 h-12 border-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
        <FaStethoscope className="w-5 h-5 mr-2"/>BCS 검사하기
    </button>
    <button className="w-1/3 h-12 border-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
        <FaClipboardList className="w-5 h-5 mr-2"/>검사 기록보기
    </button>
</div>
  )
}
