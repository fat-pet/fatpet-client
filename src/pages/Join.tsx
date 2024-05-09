import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { join } from '../api/axios';
import Header from '@/components/Header';
import { useDupStore } from '@/stores/useStore';
import { useEffect } from 'react';

interface Join {
    [key: string]: string;
}

export default function Join() {
    const navigate = useNavigate();
    const { dupId, dupName, setId, setName } = useDupStore();

    useEffect(() => {
        setId('null');
        setName('null');
    }, []);

    const handleBack = () => {
        setId('null');
        setName('null');
        navigate('/signin');
    };

    const handleJoin = (data: Join): void => {
        console.log(dupId, dupName);
        if (dupId === true && dupName === true) {
            join(
                data['이메일'],
                data['아이디'],
                data['비밀번호'],
                data['닉네임'],
            )
                .then(() => {
                    alert('회원가입이 완료되었습니다.');
                    setId('null');
                    setName('null');
                    navigate('/signin');
                })
                .catch((err) => {
                    if (err.response.status === 400) {
                        console.log('이미 회원입니다.');
                    }
                });
        } else {
            console.log('중복 확인부터 ㄱ');
        }
    };

    return (
        <div className="h-full flex flex-col justify-center">
            <div className="h-1/5 flex items-end pb-5 pl-12">
                <Header />
            </div>
            <div className="h-4/5">
                <Form
                    onSubmit={handleJoin}
                    className="h-full flex flex-col space-y-4 items-center justify-evenly px-5"
                >
                    <div className="flex w-full items-end justify-between">
                        <Form.Input
                            name="닉네임"
                            type="text"
                            minlen={4}
                            maxlen={12}
                            placeholder="4글자 이상 12글자 이하"
                        />
                        <Form.SmallButton
                            name="중복검사"
                            type="button"
                            dup="닉네임"
                        />
                    </div>
                    <div className="flex w-full items-end jusasify-between">
                        <Form.Input
                            name="아이디"
                            type="text"
                            minlen={4}
                            maxlen={12}
                            placeholder="4글자 이상 12글자 이하"
                        />
                        <Form.SmallButton
                            name="중복검사"
                            type="button"
                            dup="아이디"
                        />
                    </div>
                    <Form.Input
                        name="비밀번호"
                        type="password"
                        minlen={6}
                        maxlen={16}
                        placeholder="6글자 이상 16글자 이하"
                    />
                    <Form.Input name="이메일" type="email" />
                    <Form.Button name="회원가입" type="submit" />
                    <Form.Button
                        name="뒤로가기"
                        type="button"
                        onClick={handleBack}
                    />
                </Form>
            </div>
        </div>
    );
}
