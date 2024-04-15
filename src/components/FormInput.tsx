import React from "react";
import { useFormContext } from "../contexts/FormContext";

interface FormInputProps{
    name : string;
    type? : "text" | "password" | "email"
}

const FormInput :React.FC<FormInputProps> = ({name, type="text"})=>{
    const {register} = useFormContext();
    return(
        <>
            <label htmlFor={name} className="flex flex-col font-bold text-lg w-5/6">
                <span className="tracking-tighter">{name}</span>
                <input 
                id={name}
                type={type}
                {...register(name)}
                className="mt-3 aspect-[7/1] bg-gray-50 border-2 border-gray-200"
                />
            </label>
        </>
    )
}

export default FormInput