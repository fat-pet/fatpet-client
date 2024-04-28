
import { Link } from "react-router-dom";

export default function DashBoard() {
    
    return (
        <div>
            <Link to='./editPet' className="w-2/3 bg-gray-200 aspect-[4/1] text-xl flex justify-center items-center ">펫 정보 수정</Link>
            <Link to='./petList' className="w-2/3 bg-gray-200 aspect-[4/1] text-xl flex justify-center items-center ">펫 리스트 보기</Link>
            <Link to='/petList/create' className="w-2/3 bg-gray-200 aspect-[4/1] text-xl flex justify-center items-center ">펫 정보 생성</Link>
        </div>
    );
}

