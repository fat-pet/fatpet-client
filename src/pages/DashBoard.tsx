import { useNavigate } from 'react-router-dom';
import { deletePet, getPetList, getPetResult } from '@/api/axios';
import { useEffect, useState } from 'react';
import { PetProps, PetResult } from '@/types/types';
import PetStatus from '@/features/dashBoard/PetStatus';
import PetNotStatus from '@/features/dashBoard/PetNotStatus';
import Diagnose from '@/features/dashBoard/Diagnose';
import { ColumnBar } from '@/features/chart/ColumnBar';

export default function DashBoard() {
  const [pet, setPet] = useState<PetProps | null>(null);
  const LSData: string | null = localStorage.getItem('petData');
  const petData = LSData ? JSON.parse(LSData) : '';
  const [petGraphData, getPetGraphData] = useState<PetResult[]>();
  const navigate = useNavigate();

  useEffect(() => {
    petData
      ? setPet(petData)
      : getPetList().then((data) => setPet(data.data.body[0]));

    getPetResult(petData.id).then((res) => {
      getPetGraphData(res.data.body);
    });

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
  console.log(petGraphData);
  const dummyData = petGraphData && [
    petGraphData[0]
      ? {
          date: `${petGraphData[0].createdDate[1]}/${petGraphData[0].createdDate[2]}`,
          kg: petGraphData[0].weight,
          kcal: petGraphData[0].der,
        }
      : {
          date: '',
          kg: 0,
          kcal: 0,
        },
    petGraphData[1]
      ? {
          date: `${petGraphData[1].createdDate[1]}/${petGraphData[1].createdDate[2]}`,
          kg: petGraphData[1].weight,
          kcal: petGraphData[1].der,
        }
      : {
          date: '',
          kg: 0,
          kcal: 0,
        },
    petGraphData[2]
      ? {
          date: `${petGraphData[2].createdDate[1]}/${petGraphData[2].createdDate[2]}`,
          kg: petGraphData[2].weight,
          kcal: petGraphData[2].der,
        }
      : {
          date: '',
          kg: 0,
          kcal: 0,
        },
  ];

  return (
    <div className="px-4 h-full overflow-hidden">
      {/* 헤더 */}
      <header className="w-full h-layout-footer text-lg font-bold mb-2 flex justify-between ">
        <h2 className="text-2xl font-bold">팻펫 대시보드</h2>
      </header>

      {/* 펫 대쉬보드 */}
      <div className="h-layout-main flex flex-col justify-between">
        <div className="w-full h-2/6">
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
          <div className="w-full h-3/6 flex flex-col justify-center">
            <span className="font-bold">펫 변화 추이</span>
            <span className="text-sm text-gray-400">(최근 3회)</span>
            <ColumnBar
              name1="체중 (kg)"
              data1={dummyData ? dummyData.map((item) => item?.kg) : []}
              date={dummyData ? dummyData.map((item) => item?.date) : []}
              name2="일일 권장 사료량 (kcal)"
              data2={dummyData ? dummyData!.map((item) => item?.kcal) : []}
            />
          </div>
        )}
      </div>
    </div>
  );
}
