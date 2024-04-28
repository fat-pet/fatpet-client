import { getPetList } from "@/api/axios";
import PetListComponent from "@/features/PetList/PetListComponent";
import { useEffect } from "react";

export default function PetList() {
    useEffect(()=>{
        getPetList()
        .then((data)=>console.log(data))
    },[])
    
    return (
        <div className="mx-5 pt-10">
            <p className="text-xl font-bold mb-10">펫 목록</p>
            <div className="flex flex-col items-center">
                <PetListComponent />       
                <PetListComponent />       
                <PetListComponent />       
            </div>
        </div>
    );
}

