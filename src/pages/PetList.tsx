import { getPetList } from "@/api/axios";
import PetListComponent from "@/features/PetList/PetListComponent";
import { PetProps } from "@/types/types";
import { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function PetList() {

    const [pet,setPet] = useState<PetProps>();

    useEffect(()=>{
        getPetList()
        .then((data)=>setPet(data.data.body))
    },[])
    
    return (
        <div className="mx-5 pt-10">
            <p className="text-xl font-bold mb-10">펫 목록</p>
            <div className="flex flex-col items-center">
                {pet!.map((item)=>{
                    <PetListComponent />       
                })}
                <Link to="/inputData"><CiSquarePlus className="w-10 h-10"/></Link>  
            </div>
        </div>
    );
}

