import React from "react";
import { useFormContext } from "../contexts/FormContext";

interface FormInputProps{
    name : string;
    type? : "text" | "password" | "email" | "number";
    minlen ?: number;
    maxlen ?: number;
}

const FormInput :React.FC<FormInputProps> = ({name, type="text", minlen, maxlen})=>{
    const { register, errors} = useFormContext();
    return(
        <>
            <label htmlFor={name} className="flex flex-col font-bold justify-start text-lg w-5/6">
                <div className="flex justify-between">
                    <span className="tracking-tighter">{name}</span>
                    {errors[name] && 
                    <span className="text-sm text-red-500 pt-2">
                        { errors[name]?.message as string}
                    </span>}
                </div>
                <input 
                id={name}
                type={type}
                {...register(name, {
                    required: `${name}을(를) 입력해주세요.`,
                    pattern: {
                        value: new RegExp(name==='이메일' ? "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" : "^[A-Za-z0-9]*$"),
                        message: "띄어쓰기를 사용할 수 없습니다."
                    },
                    ...(minlen && { minLength: { value: minlen, message: `${name}는 ${minlen}글자 이상이어야 합니다.` }}),
                    ...(maxlen && { maxLength: { value: maxlen, message: `${name}는 ${maxlen}글자 이하이어야 합니다.` }}),
                  })}
                className={`w-full mt-3 h-12 bg-gray-50 border-2 border-gray-200`}

                />
                
            </label>
        </>
    )
}

export default FormInput