import React from "react";
import { useFormContext } from "../contexts/FormContext";
import { constrain } from "../utils/constrain";

interface FormInputProps{
    name : string;
    type? : "text" | "password" | "email";
}

const FormInput :React.FC<FormInputProps> = ({name, type="text"})=>{
    const {register, errors} = useFormContext();
    return(
        <>
            <label htmlFor={name} className="flex flex-col font-bold justify-start text-lg w-5/6">
                <div className="flex justify-between">
                    <span className="tracking-tighter">{name}</span>
                    {errors[name] && <span className="text-sm text-red-500 pt-2">{ errors[name]?.message as string}</span>}
                </div>
                <input 
                id={name}
                type={type}
                {...register(name, {
                    required: `${name}은(는) 필수 입력입니다.`,
                    ...(constrain(name)),
                  })}
                className="w-[5/6] mt-3 h-12 bg-gray-50 border-2 border-gray-200"
                />
                
            </label>
        </>
    )
}

export default FormInput