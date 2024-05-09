// import React from 'react';
import Header from '@/components/Header';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();
    return (
        <div className="h-full flex flex-col justify-center">
            <div className="ml-10 -mt-32 mb-10">
                <Header />
            </div>
            <Form
                onSubmit={() => {}}
                className="w-full h-1/5 flex flex-col items-center justify-evenly"
            >
                <div className="w-full px-5">
                    <Form.Button
                        name="로그인"
                        type="button"
                        onClick={() => navigate('/signin')}
                    />
                    <p className="h-5"></p>
                    <Form.Button
                        name="로그인 없이 시작"
                        type="button"
                        onClick={() => navigate('/inputData')}
                    />
                </div>
            </Form>
        </div>
    );
}
