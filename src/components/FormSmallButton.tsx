import { checkdup } from "@/api/axios";
import { useFormContext } from "@/contexts/FormContext";
import React
 from "react";
interface FormButtonProps{
    name?:string;
    dup?: string;
    type?:"button"| "submit";
}


const FormSmallButton:React.FC<FormButtonProps> = ({name, type="button", dup})=>{
    let {isSubmitting, watch, duplicateId, duplicateName, setDuplicateName, setDuplicateId} = useFormContext();

    let first = false;

    const handleDup= () =>{
        const Id : string= watch('아이디')
        const Nickname : string = watch('닉네임')
        first=true
        console.log(duplicateName)
        if(dup==='닉네임'){
            checkdup(' ', Nickname)
            .then((data)=>{
                data.status===200 ? setDuplicateName(true) : ''  
            })
        }
        else if(dup==='아이디'){
            checkdup(Id, ' ')
            .then((data)=>{
                data.status===200 ? setDuplicateId(true) : ''  
            })
        }
    }

    return(
        <div>
                {!duplicateId ? <div className={`${first ? 'block' : 'hidden'}`}>중복된 {dup}입니다</div> : <div className={`${first ? 'block' : 'hidden'}`}>사용 가능한 {dup} 입니다</div>}
            <button
                type={type}
                className="w-20 h-10 bg-[#333333] text-white tracking-tighter text-sm mb-1"
                onClick={handleDup}
                disabled={isSubmitting}
                >
                {name}
            </button>
        </div>
    
    )
}

export default FormSmallButton