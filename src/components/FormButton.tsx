import { useFormContext } from "@/contexts/FormContext";
import React from "react";
interface FormButtonProps{
    name:string;
    onClick?: ()=>void;
    type?:"button"| "submit";
    className ?: string;
}

const FormButton:React.FC<FormButtonProps> = ({name, type="button", onClick, className })=>{

    const {isSubmitting} = useFormContext();

    return(
        <button
            type={type}
            className={`w-full aspect-[7/1] bg-[#333333] text-white font-bold ${className}`}
            onClick={onClick ? onClick : ()=>{}}
            disabled={isSubmitting}
            >
            {name}
        </button>
    
    )
}

export default FormButton