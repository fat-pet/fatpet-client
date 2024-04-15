import React from "react";
import { useFormContext } from "../contexts/FormContext";
import { Message, ValidationRule } from "react-hook-form";
import { constrain } from "../utils/constrain";

interface FormInputProps{
    name : string;
    type? : "text" | "password" | "email";
}

interface EmailPattern{
    value : RegExp;
    message: string;
}

const emailPattern : EmailPattern = {
    value : new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
    message : "이메일 형식에 맞지 않습니다"
}


const FormInput :React.FC<FormInputProps> = ({name, type="text"})=>{
    const {register, errors} = useFormContext();
    const email_value = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return(
        <>
            <label htmlFor={name} className="flex flex-col font-bold text-lg w-5/6">
                <div className="flex justify-between">
                    <span className="tracking-tighter">{name}</span>
                    {errors[name] && <span className="text-sm text-red-500 pt-2">{ errors[name]?.message as string}</span>}
                </div>
                <input 
                id={name}
                type={type}
                {...register(name, {
                    required: `${name}은 필수 입력입니다.`,
                    ...(constrain(name)),
                  })}
                className="mt-3 aspect-[7/1] bg-gray-50 border-2 border-gray-200"
                />
                
            </label>
        </>
    )
}

export default FormInput