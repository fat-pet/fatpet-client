import React from "react";
import { useFormContext } from "../contexts/FormContext";
import { constrain } from "../utils/constrain";

interface FormInputProps{
    name : string;
    type? : "text" | "password" | "email";
}

const FormInput :React.FC<FormInputProps> = ({name, type="text"})=>{
    const { register, errors, duplicateId, duplicateName} = useFormContext();
    const style1 = duplicateName===''? 'hidden' : 'block'
    const style2 = name==='닉네임' ? 'block' : 'hidden'
    const style3 = duplicateId===''? 'hidden' : 'block'
    const style4 = name==='아이디' ? 'block' : 'hidden'
    const style5 = 'text-sm text-red-400 pt-3'
    const style6 = 'text-sm text-green-400 pt-3'
    return(
        <>
            <label htmlFor={name} className="flex flex-col font-bold justify-start text-lg w-5/6">
                <div className="flex justify-between">
                    <span className="tracking-tighter">{name}</span>
 
                    {duplicateName===true
                    ?<p className={`${style1} ${style2} ${style6}`}>사용 가능한 {name} 입니다</p>
                    :<p className={`${style1} ${style2} ${style5}`}>중복된 {name} 입니다</p>}

                    {duplicateId===true
                    ?<p className={`${style3} ${style4} ${style6}`}>사용 가능한 {name} 입니다</p>
                    :<p className={`${style3} ${style4} ${style5}`}>중복된 {name} 입니다</p>}

                    {errors[name] && 
                    <span className="text-sm text-red-500 pt-2">
                        { errors[name]?.message as string}
                    </span>}

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