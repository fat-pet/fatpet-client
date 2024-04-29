import { Outlet } from "react-router-dom";
// import React from "react";

export default function BasicLayout() {
    return (
        <div className='max-w-[480px] border-2 w-full overflow-scroll scrollbar-hidden'>
            <Outlet/>
        </div>
    );
}

