import React
 from "react";
interface FormButtonProps{
    name?:string;
    // icon?:IconType
    onClick?: ()=>void;
    type?:"button"| "submit";
}

const FormButton:React.FC<FormButtonProps> = ({name, type="button", onClick})=>{


    return(
        <button
            type={type}
            className="w-5/6 aspect-[6/1] bg-[#333333] text-white font-bold"
            onClick={onClick ? onClick : ()=>{}}
            >
            {name}
        </button>
    
    )
}

export default FormButton