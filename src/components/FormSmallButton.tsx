import { useFormContext } from "@/contexts/FormContext";
import React
 from "react";
interface FormButtonProps{
    name?:string;
    // icon?:IconType
    onClick?: ()=>void;
    type?:"button"| "submit";
}

const FormSmallButton:React.FC<FormButtonProps> = ({name, type="button", onClick})=>{

    const {isSubmitting} = useFormContext();
    return(
        <button
            type={type}
            className="w-20 h-10 bg-[#333333] text-white tracking-tighter text-sm mb-1"
            onClick={onClick ? onClick : ()=>{}}
            disabled={isSubmitting}
            >
            {name}
        </button>
    
    )
}

export default FormSmallButton