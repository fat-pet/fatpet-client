import Form from '../components/Form';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/axios';
import Header from '@/components/Header';
import { useTokenStore } from '@/stores/useStore';
import { useEffect } from 'react';

interface Login {
  [key: string]: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useTokenStore();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogin = (data: Login) => {
    login(data['id'], data['password'])
      .then((res) => {
        localStorage.setItem('token', res.data.body.token);
        localStorage.setItem('role', res.data.body.role);
        setToken(res.data.body.token);
        if (res.data.body.role === 'ADMIN') {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          alert('아이디 혹은 비밀번호를 다시 확인해 주세요.');
        }
      });
  };

  useEffect(() => {
    if (token) {
      if (role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full flex flex-col justify-center">
      <Header />
      <div className="h-2/3">
        <Form onSubmit={handleLogin} className="flex flex-col items-center">
          <div className="w-full mb-6">
            <Form.Input name="아이디" value="id" />
          </div>
          <div className="w-full mb-16">
            <Form.Input name="비밀번호" value="password" type="password" />
          </div>
          <div className="w-full mb-3">
            <Form.Button
              name="로그인"
              type="submit"
              className="bg-green-600 hover:opacity-70 transition-opacity text-white"
            />
          </div>
          <Link
            to={'/signup'}
            className="block w-full py-3 text-center font-medium hover:opacity-70"
          >
            아직 회원이 아니시라면?{' '}
            <span className="underline">회원가입하기</span>
          </Link>
        </Form>
      </div>
    </div>
  );
}
