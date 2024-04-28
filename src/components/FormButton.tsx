import { useFormContext } from "@/contexts/FormContext";
import React from "react";
interface FormButtonProps{
    name:string;
    onClick?: ()=>void;
    type?:"button"| "submit";
}

const FormButton:React.FC<FormButtonProps> = ({name, type="button", onClick })=>{

    const {isSubmitting} = useFormContext();

    return(
        <button
            type={type}
            className="w-5/6 aspect-[6/1] bg-[#333333] text-white font-bold"
            onClick={onClick ? onClick : ()=>{}}
            disabled={isSubmitting}
            >
            {name}
        </button>
    
    )
}

export default FormButton