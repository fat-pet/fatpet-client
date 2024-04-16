// import React from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { join } from "../api/axios";
import Header from "@/components/Header";

interface Join {
    "닉네임" : string;
    "아이디" : string;
    "비밀번호" : string;
    "이메일" : string;
}

export default function Join() {
    const navigate = useNavigate();

    const handleJoin = (data:Join) :void=>{
      join(data['이메일'],data['아이디'],data['비밀번호'],data['닉네임'])
      .then(()=>{
        alert('회원가입이 완료되었습니다.')
        navigate('/login')
      })
      .catch((err)=>{
        if(err.response.status===400){
            console.log('이미 회원입니다.')
        }
      })
    }

    return (
        <div className="h-full flex flex-col justify-center pt-32">
            <Header />
            <Form onSubmit={handleJoin} className="flex flex-col space-y-4 items-center ">
                <Form.Input name="닉네임" type="text" />
                <Form.Input name="아이디" type="text" />
                <Form.Input name="비밀번호" type="password" />
                <Form.Input name="이메일" type="email"/>
                <Form.Button name="회원가입" type="submit" />
                <Form.Button name="뒤로가기" type="button" onClick={()=>navigate('/signin')} />
            </Form>
        </div>
    );
}

