
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { deletePet } from "@/api/axios";

export default function DashBoard() {

    const id = 3;

    function handleDelete(){
        deletePet(id)
    }
    
    return (
        <div className="flex flex-col items-center mx-8 mt-12 font-bold tracking-tighter ">
            <div className="flex justify-between w-full items-center">
                <p className="text-lg">이상연님<br/> 안녕하세요</p>
                <Link to='./editMember'><FaGear className="text-2xl"/></Link>  
            </div>

            <div className="w-full mt-12 flex flex-col items-center">
                <p className="text-sm mb-3 mr-56">현재 선택 중인 펫</p>
                <div className="w-5/6 h-40 bg-blue-400 rounded-xl px-5 text-white">
                    <div className="h-2/3 flex items-center pl-3 justify-between">
                        <FaDog className="text-6xl"/>
                        <div className="mr-12">
                            <p>이름 : 마루</p>
                            <div className="flex mb-1">
                                <p className="text-xs">품종 : 푸들</p>
                                <p className="text-xs ml-3">나이 : 7살</p>
                            </div>
                            <div className="flex">
                                <p className="text-xs">성별 : 수컷</p>
                                <p className="text-xs ml-3">중성화 : X</p>

                            </div>
                        </div>
                        <Link to='./petList'><IoIosArrowForward className="text-4xl"/></Link>
                    </div>
                    <div className="h-1/3 border-t flex items-center text-center text-white">
                        <Link to="./editPet" className="w-1/2">펫 정보 수정</Link>
                        <button className="border-l w-1/2" onClick={handleDelete}>펫 정보 삭제</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

