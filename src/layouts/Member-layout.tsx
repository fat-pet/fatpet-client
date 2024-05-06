import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function MemberLayout() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    useEffect(()=>{
        if(token){
        }
        else{
            navigate('/signin')
        }
        
    },[])

    return (
        <div className='max-w-[480px] border-2 w-full overflow-scroll scrollbar-hidden pt-12 px-8'>
            <Outlet/>
        </div>
    );
}

