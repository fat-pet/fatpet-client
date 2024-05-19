import { useNavigate } from 'react-router-dom';
import { deletePet, getPetList } from '@/api/axios';
import { useEffect, useState } from 'react';
import { PetProps } from '@/types/types';
import PetStatus from '@/features/dashBoard/PetStatus';
import PetNotStatus from '@/features/dashBoard/PetNotStatus';
import Diagnose from '@/features/dashBoard/Diagnose';
import { ColumnBar } from '@/features/chart/ColumnBar';

export default function DashBoard() {
  const [pet, setPet] = useState<PetProps | null>(null);
  const LSData: string | null = localStorage.getItem('petData');
  const petData = LSData ? JSON.parse(LSData) : '';
  const navigate = useNavigate();

  useEffect(() => {
    petData
      ? setPet(petData)
      : getPetList().then((data) => setPet(data.data.body[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDelete() {
    deletePet(pet!.id).then(() => {
      localStorage.removeItem('petData');
      getPetList().then((data) => {
        data.data.body ? setPet(data.data.body[0]) : setPet(null);
      });
      navigate('/dashboard');
    });
  }

  return (
    <div className="px-4">
      {/* 헤더 */}
      <header className="w-full text-lg font-bold mb-2 flex justify-between ">
        <h2 className="text-2xl font-bold">팻펫 대시보드</h2>
      </header>

      {/* 펫 대쉬보드 */}
      <div className="w-full mt-5">
        {pet ? (
          <PetStatus pet={pet as PetProps} handleDelete={handleDelete} />
        ) : (
          <PetNotStatus />
        )}
      </div>

      {/* BCS 검사하기 , 검사 기록보기 버튼 */}
      <div className="w-full h-1/6 flex items-center">
        {pet && <Diagnose id={pet.id} />}
      </div>

      {/* 펫 변화추이 그래프 */}
      {pet && (
        <div className="w-full h-3/5 flex flex-col justify-center">
          <span className="font-bold">펫 변화 추이</span>
          <span className="text-sm text-gray-400">(최근 3회)</span>
          <ColumnBar
            name1="kg"
            data1={dummyData.map((item) => item.kg)}
            name2="BCS"
            data2={dummyData.map((item) => item.BCS)}
          />
          <p className="text-sm text-gray-500">
            *BCS(Body Condition Score) : 펫의 비만도를 1~9만큼 측정한 값
          </p>
        </div>
      )}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const dummyData = [
  {
    name: '4/17',
    kg: 35,
    BCS: 8,
  },
  {
    name: '4/25',
    kg: 25,
    BCS: 6,
  },
  {
    name: '5/6',
    kg: 23,
    BCS: 5,
  },
];
