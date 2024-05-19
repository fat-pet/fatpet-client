// import React from 'react';
import Header from '@/components/Header';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="mb-16">
        <Header />
        <div className="bg-emerald-50 border p-7">
          <p className="text-2xl font-semibold">
            혹시, 우리 집 강아지도 비만일까?
          </p>
          <p className="text-lg font-medium text-gray-500">
            팻펫에서 반려동물의 비만도를 진단해 보세요.
          </p>
          <div className="flex justify-end">
            <img
              src="/footprint.png"
              alt="fatpet"
              className="w-14 opacity-30 mt-24"
            />
          </div>
        </div>
      </div>
      <Form
        onSubmit={() => {}}
        className="w-full flex flex-col items-center justify-evenly mb-28"
      >
        <Form.Button
          name="로그인하기"
          type="button"
          className="bg-green-600 hover:opacity-70 transition-opacity text-white"
          onClick={() => navigate('/signin')}
        />
      </Form>
    </div>
  );
}
