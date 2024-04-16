import { message } from "antd"


export function constrain(name : string) {
    if(name==='이메일'){
        return({pattern : { 
            value: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"),
            message: "이메일 형식에 맞지 않습니다"}})
    }
    else if(name==='아이디'){
        return({
            minLength:{value:4, message:'아이디는 4글자 이상이어야 합니다.'},
            maxLength:{value:12, message:'아이디는 12글자 이하이어야 합니다.'}
        })
    }
    else if(name==='닉네임'){
        return({
            pattern: {
                value: /\S+/,
                message: "띄어쓰기를 사용할 수 없습니다."
            },
            minLength:{value:4, message:'닉네임은 4글자 이상이어야 합니다.'},
            maxLength:{value:12, message:'닉네임은 12글자 이하이어야 합니다.'}
        })
    }
    else if(name==='비밀번호'){
        return({
            minLength:{value:6, message:'비밀번호는 6글자 이상, 16글자 이하여야한다.'},
            maxLength:{value:16, message:'비밀번호는 6글자 이상, 16글자 이하여야한다.'}
        })
    }
}