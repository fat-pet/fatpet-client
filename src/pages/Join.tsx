// import React from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { join } from "../api/axios";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface Join {
    "닉네임" : string;
    "아이디" : string;
    "비밀번호" : string;
    "이메일" : string;
}

export default function Join() {
    const navigate = useNavigate();
    const [dupId, setDupId] = useState<boolean>(false);
    const [dupName, setDupName] = useState<boolean>(false);
    const IdRef= useRef();

    const {watch} = useForm<FieldValues>();

    const handleJoin = (data:Join) :void=>{
      if(dupId && dupName){
        join(data['이메일'],data['아이디'],data['비밀번호'],data['닉네임'])
        .then(()=>{
          alert('회원가입이 완료되었습니다.')
          navigate('/signin')
        })
        .catch((err)=>{
          if(err.response.status===400){
              console.log('이미 회원입니다.')
          }
        })
      }

    }

    return (
        <div className="h-full flex flex-col justify-center">
            <div className="h-1/5 flex items-end pb-5 pl-12">
              <Header />
            </div>
            <div className="h-4/5">
              <Form onSubmit={handleJoin} className="h-full flex flex-col space-y-4 items-center justify-evenly ">
                  <div className="flex w-5/6 items-end justify-between">
                    <Form.Input name="닉네임" type="text"/>
                    <Form.SmallButton name="중복검사" type="button" dup="닉네임" />
                  </div>
                  <div className="flex w-5/6 items-end justify-between">
                    <Form.Input name="아이디" type="text" />
                    <Form.SmallButton name="중복검사" type="button" dup="아이디"/>
                  </div>
                  <Form.Input name="비밀번호" type="password" />
                  <Form.Input name="이메일" type="email"/>
                  <Form.Button name="회원가입" type="submit" />
                  <Form.Button name="뒤로가기" type="button" onClick={()=>navigate('/signin')} />
              </Form>
            </div>
        </div>
    );
}

