
interface Props{
    name : string
    dupName : string | boolean
    dupId : string | boolean
}

export default function InputError({name, dupName, dupId} : Props) {
    const red = 'text-sm text-red-400'
    const green = 'text-sm text-green-400'

    if(name==='닉네임'){
        if(dupName==='null'){
            return <></>
        }
        else if(dupName ===true){
            return <p className={green}>사용 가능한 닉네임입니다</p>
        }
        else if(dupName === false){
            return <p className={red}>중복된 닉네임입니다</p>
        }
        else if(dupName === 'error'){
            return <p className={red}>4글자 이상 12글자 이하이어야 합니다</p>
        }

    }else if(name==='아이디'){
        if(dupId==='null'){
            return <></>
        }
        else if(dupId ===true){
            return <p className={green}>사용 가능한 아이디입니다</p>
        }
        else if(dupId === false){
            return <p className={red}>중복된 아이디입니다</p>
        }
        else if(dupId === 'error'){
            return <p className={red}>4글자 이상 12글자 이하이어야 합니다</p>
        }
    }
}

