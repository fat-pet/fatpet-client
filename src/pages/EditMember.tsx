import EditNickName from "@/features/editMember/EditNickName";
import ResignPopup from "@/features/editMember/ResignPopup";
import { useTokenStore } from "@/stores/useStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = "text-lg xsm:text-xl font-bold tracking-tighter border-b border-[#727272] h-1/3 flex items-center hover:cursor-pointer pl-3"

export default function EditMember() {

    const [openNick, setOpenNick] = useState<boolean>(false);
    const [openResign, setOpenResign] = useState<boolean>(false);
    const naviage = useNavigate();
    const {setToken} = useTokenStore();
    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('petData')
        setToken('')
        naviage('/')
    }

    return (
        <div className={`w-full h-full relative  ${openNick || openResign ? 'bg-black bg-opacity-50': ''}`}>
            <p className="text-xl font-bold tracking-tighter pb-10">회원 정보 관리</p>

            <div className="h-1/4 flex flex-col justify-between z-10">
                <p className={`${style} , border-t`}>비밀번호 변경</p>
                <p onClick={()=>setOpenNick(true)} className={style}>회원 닉네임 & 이메일 변경</p>
                <p onClick={()=>handleLogout()} className={style}>로그아웃</p>
            </div>

            <div className="h-1/4 px-10 mt-40">
                <button onClick={()=>setOpenResign(true)} className={`border-red-400 border-2 text-red-400 w-full aspect-[5/1] text-xl font-bold ${openResign ? 'text-black border-black' : ''}`}>회원 탈퇴</button>
            </div>
            
            
            {openNick ? <div className="z-30 absolute top-32 w-full flex justify-center"><EditNickName setOpen={setOpenNick}/></div> :''}

            {openResign ? <div className="z-30 absolute top-32 w-full flex justify-center"> <ResignPopup setOpen={setOpenResign}/></div> : ''}
        </div>
    );
}


// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0Iiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTcxNDk5NTU1OCwiZXhwIjoxNzE3NTg3NTU4fQ.zQvXLw6wMukgHdTrYy6e-Mag19b122Psg-0Gtq64iII

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTcxNDk5NTU3NywiZXhwIjoxNzE3NTg3NTc3fQ.hYLbSFyopmFoLIZDRhhK9rHMYcAbONdrPwI00cWxRqg

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTcxNDk5MTQ5OSwiZXhwIjoxNzE3NTgzNDk5fQ.gzU6n0PMy3x-nRzLfKnCGmVcqzaD_YM0J9_irZxGp3g

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTcxNDk5NTU3NywiZXhwIjoxNzE3NTg3NTc3fQ.hYLbSFyopmFoLIZDRhhK9rHMYcAbONdrPwI00cWxRqg

// Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTcxNDk5NTc1OSwiZXhwIjoxNzE3NTg3NzU5fQ.dihRMl12HTU3uLmlXN4YIYKmBxsMD0HPMTU1V7V_QLQ


// Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTcxNDk5NTc1OSwiZXhwIjoxNzE3NTg3NzU5fQ.dihRMl12HTU3uLmlXN4YIYKmBxsMD0HPMTU1V7V_QLQ

// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Iiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTcxNDk5NjExNCwiZXhwIjoxNzE3NTg4MTE0fQ.rO4EUKlsrNfZDvOWIbC8KVkbkYAPgFYgEPlblE7iolU