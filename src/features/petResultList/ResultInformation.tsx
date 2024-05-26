import { PetResult } from '@/types/types';
import { RowBar } from '../chart/CharRowBar';
import SimpleResult from '../result/SimpleResult';
import transBreed from '@/utils/transBreed';
import { useEffect, useState } from 'react';
import { getBreed } from '@/api/axios';

export default function ResultInformation({ data }: { data?: PetResult }) {
  const storage = localStorage.getItem('petData');
  const petData = storage && JSON.parse(storage);
  const [weight, setWeight] = useState<string[]>();
  const [color, setColor] = useState<string>();
  useEffect(() => {
    getBreed().then((res) => {
      if (res.data.body.name === petData.breed.name) {
        setWeight([res.data.body.avgWeightLow, res.data.body.avgWeightHigh]);
      }
    });
  }, []);

  function formatBSC(bcs: string) {
    if (bcs === 'UNDER') {
      setColor('#60a5fa');
      return '저체중';
    } else if (bcs === 'IDEAL') {
      setColor('#22C55E');
      return '정상';
    } else {
      setColor('#DD4141');
      return '과체중';
    }
  }

  return (
    <div className="w-full my-10 ">
      <div className="text-sm text-gray-400 mb-3">3월 26일 BCS 검사표</div>
      <div className="w-full h-full border-[1px] border-gray-300 flex flex-col items-center justify-center aspect-[3/2] rounded-xl py-10 font-bold space-y-5 shadow-md">
        <div className="text-center">
          <p>검사 결과 : {data?.bcs ? formatBSC(data!.bcs) : '과체중'}</p>
          <p className="text-sm text-gray-400">{`${transBreed(petData?.breed.species, petData.breed.name)}의 평균 무게는 ${weight ? `${weight[0]} ~ ${weight[1]}` : '3.6kg ~ 4.8kg'} 입니다`}</p>
        </div>
        <div>
          <RowBar
            name="몸무게"
            unit="kg"
            data={[data?.weight ? data!.weight : 5.7]}
            color={color ? color : '#DD4141'}
          />
        </div>
        <div>
          <RowBar
            name="일일 권장 칼로리"
            unit="kcal"
            data={[data?.der ? data!.der : 200]}
          />
        </div>
      </div>
    </div>
  );
}
