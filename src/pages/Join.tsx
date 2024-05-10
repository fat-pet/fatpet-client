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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBack = () => {
    setId('null');
    setName('null');
    navigate('/signin');
  };

  const handleJoin = (data: Join): void => {
    console.log(dupId, dupName);
    if (dupId === true && dupName === true) {
      join(data['이메일'], data['아이디'], data['비밀번호'], data['닉네임'])
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
      <Header />
      <div className="h-4/5">
        <Form
          onSubmit={handleJoin}
          className="h-full flex flex-col items-center"
        >
          {/* <div className="flex w-full items-end justify-between mb-5"> */}
          <div className="w-full mb-5">
            <div className="w-full mr-3">
              <Form.Input
                name="닉네임"
                type="text"
                minLen={2}
                maxLen={10}
                placeholder="2글자 이상, 10글자 이하"
              />
            </div>
            {/* <Form.SmallButton
                            name="중복 확인"
                            type="button"
                            dup="닉네임"
                        /> */}
          </div>
          {/* <div className="flex w-full items-end justify-between mb-5"> */}
          <div className="w-full mb-5">
            <div className="w-full mr-3">
              <Form.Input
                name="아이디"
                type="text"
                minLen={4}
                maxLen={12}
                placeholder="4글자 이상, 12글자 이하"
              />
            </div>
            {/* <Form.SmallButton
                            name="중복 확인"
                            type="button"
                            dup="아이디"
                        /> */}
          </div>
          <div className="w-full mb-5">
            <Form.Input
              name="비밀번호"
              type="password"
              minLen={6}
              maxLen={16}
              placeholder="6글자 이상, 16글자 이하"
            />
          </div>
          <div className="w-full mb-12">
            <Form.Input
              name="이메일"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          <Form.Button
            name="회원가입하기"
            type="submit"
            className="bg-green-600 hover:opacity-70 transition-opacity text-white mb-4"
          />
          <Form.Button
            name="뒤로가기"
            type="button"
            onClick={handleBack}
            className="bg-neutral-800 hover:opacity-70 transition-opacity text-white"
          />
        </Form>
      </div>
    </div>
  );
}
