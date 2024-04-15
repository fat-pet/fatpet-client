import React from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { login } from "../api/axios";

interface Login {
    "아이디" : string;
    "비밀번호" : string;
}

export default function Login() {
    const navigate = useNavigate();
    const handleLogin = (data : Login)=>{
        console.log('눌림')
        login(data['아이디'],data['비밀번호'])
        .then((data)=>{console.log(data.data.body.token)})
        .catch((err)=>{
            if(err.response.status==403){
                console.log('아이디 혹은 비밀번호가 틀립니다.')
            }
        })
    }

    return (
        <div className="h-full flex flex-col justify-center">
            <header className="-mt-32 my-16 ml-10">
                <p className="text-sm font-bold -mb-2">반려동물 비만도 검사</p>
                <p className="text-5xl font-extrabold text-[#79D7FF]">Fatpet</p>
            </header>

            <Form onSubmit={handleLogin} className="flex flex-col space-y-10 items-center ">
                <Form.Input name="아이디"/>
                <Form.Input name="비밀번호" type="password"/>
                <Form.Button name="로그인" type="submit"/>
                <Form.Button name="회원가입" type="button" onClick={()=>navigate('/join')}/>
            </Form>
        </div>
    );
}

