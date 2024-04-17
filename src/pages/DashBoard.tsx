
import { Link } from "react-router-dom";

export default function DashBoard() {
    
    return (
        <div>
            <Link to='/editMember' className="w-2/3 bg-gray-200 aspect-[4/1] text-xl flex justify-center items-center ">회원 정보 수정 버튼</Link>
        </div>
    );
}

