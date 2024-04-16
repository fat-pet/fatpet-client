// import React from 'react';
import { Token } from '@/stores/useStore';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();
    return (
        <div>
            <Form onSubmit={()=>{}}>
                <Form.Button name="로그인" type="button" onClick={()=>navigate('/signin')}/>
                {Token()}
                <Form.Button name="로그인 없이 시작" type="button"/>
            </Form>            
        </div>
    );
}

