import { Outlet } from 'react-router-dom';
// import React from "react";

export default function BasicLayout() {
    return (
        <div className="max-w-[480px] border-2 w-full h-full overflow-scroll scrollbar-hidden pt-12 px-8">
            <Outlet />
        </div>
    );
}
