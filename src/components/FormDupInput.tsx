import React from "react";
import { useFormContext } from "../contexts/FormContext";
import { useDupStore } from "@/stores/useStore";
import InputError from "@/components/InputError";

interface FormInputProps{
    name : string;
    type? : "text" | "password" | "email";
    minlen ?: number;
    maxlen ?: number;
}

const FormDupInput :React.FC<FormInputProps> = ({name, type="text", minlen, maxlen})=>{
    const { register} = useFormContext();
    const {dupId, dupName} = useDupStore();

    return(
        <>
            <label htmlFor={name} className="flex flex-col font-bold justify-start text-lg w-5/6">
                <div className="flex justify-between">
                    <span className="tracking-tighter">{name}</span>
                    <InputError name={name} dupId={dupId} dupName={dupName}/>
                </div>
                <input 
                id={name}
                type={type}
                {...register(name, {
                    required: `${name}은(는) 필수 입력입니다.`,
                    pattern: {
                        value: new RegExp(name==='이메일' ? "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" : "^[A-Za-z0-9]*$"),
                        message: "띄어쓰기를 사용할 수 없습니다."
                    },
                    ...(minlen && { minLength: { value: minlen, message: `${name}는 ${minlen}글자 이상이어야 합니다.` }}),
                    ...(maxlen && { maxLength: { value: maxlen, message: `${name}는 ${maxlen}글자 이하이어야 합니다.` }}),
                  })}
                className="w-[5/6] mt-3 h-12 bg-gray-50 border-2 border-gray-200"
                />
                
            </label>
        </>
    )
}

export default FormDupInput