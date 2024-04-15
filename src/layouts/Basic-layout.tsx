import { Outlet } from "react-router-dom";

export default function BasicLayout() {
    return (
        <div className='max-w-[480px] bg-gray-200 w-full min-h-full'>
            <Outlet/>
        </div>
    );
}

