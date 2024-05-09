// import React from "react";
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/axios';
import Header from '@/components/Header';
import { useTokenStore } from '@/stores/useStore';
import { useEffect } from 'react';

interface Login {
    아이디: string;
    비밀번호: string;
}

export default function Login() {
    const navigate = useNavigate();
    const { setToken } = useTokenStore();
    const token = localStorage.getItem('token');
    const handleLogin = (data: Login) => {
        login(data['아이디'], data['비밀번호'])
            .then((data) => {
                localStorage.setItem('token', data.data.body.token);
                setToken(data.data.body.token);
            })
            .then(() => {
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status == 400) {
                    alert('아이디 혹은 비밀번호가 틀립니다.');
                }
            });
    };

    useEffect(() => {
        if (token) {
            navigate('/dashboard');
        }
    }, []);

    return (
        <div className="h-full flex flex-col justify-center">
            <div className="h-1/3 flex items-end ml-12 pb-10">
                <Header />
            </div>
            <div className="h-2/3">
                <Form
                    onSubmit={handleLogin}
                    className="flex flex-col space-y-10 items-center px-5"
                >
                    <Form.Input name="아이디" />
                    <Form.Input name="비밀번호" type="password" />
                    <Form.Button name="로그인" type="submit" />
                    <Form.Button
                        name="회원가입"
                        type="button"
                        onClick={() => navigate('/signup')}
                    />
                </Form>
            </div>
        </div>
    );
}
