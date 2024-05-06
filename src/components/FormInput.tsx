import React from "react";
import { useFormContext } from "../contexts/FormContext";
import InputError from "./InputError";
import { useDupStore } from "@/stores/useStore";

interface FormInputProps{
    name : string; // Input 위에 이름
    type? : "text" | "password" | "email" | "number";
    minlen ?: number; // 최소 글자 수
    maxlen ?: number; // 최대 글자 수
    placeholder ?: string 
    unit ?: string;  // 단위
}

const FormInput :React.FC<FormInputProps> = ({name, type="text", minlen, maxlen, placeholder, unit})=>{
    const { register, errors} = useFormContext();
    const {dupId, dupName} = useDupStore();
    console.log(name, dupName)
    return(
        <>
            <label htmlFor={name} className="flex flex-col font-bold justify-start text-lg w-full">
                <div className="flex justify-between">
                    <span className="tracking-tighter">{name}</span>
                    
                    <span className="text-sm text-red-500 pt-2">
                        { errors[name] 
                        ? errors[name]?.message as string
                        : <InputError name={name} dupId={dupId} dupName={dupName}/>
                        }
                    </span>

                </div>

                <div className="flex items-center">
                    <input 
                    id={name}
                    placeholder={placeholder}
                    type={type}
                    {...register(name, {
                        required: `필수입력 항목입니다`,
                        pattern: {
                            value: new RegExp(name==='이메일' ? '' : "^[가-힣A-Za-z0-9]*$"),
                            message: "띄어쓰기 또는 기호를 사용할 수 없습니다."
                        },
                        ...(minlen && { minLength: { value: minlen, message: `${name}는 ${minlen}글자 이상이어야 합니다.` }}),
                        ...(maxlen && { maxLength: { value: maxlen, message: `${name}는 ${maxlen}글자 이하이어야 합니다.` }}),
                    })}
                    // Input 디자인 clasNmae
                    className={`w-full mt-3 h-12 bg-gray-50 border-2 border-gray-200`}
                    />
                    {/* 단위 ex) ~~~ cm kcal 등등 */}
                    {unit &&
                    <p className="ml-8">{unit}</p>
                    } 
                </div>
            </label>
        </>
    )
}

export default FormInput