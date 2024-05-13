import { getPetResult } from '@/api/axios';
import ResultInformation from '@/features/petResultList/ResultInformation';
import { PetResult } from '@/types/types';
import { useEffect, useState } from 'react';

export default function PetResultList() {
  const data = localStorage.getItem('petData');
  const petData = data ? JSON.parse(data) : null;
  const [petResult, setPetResult] = useState<PetResult[]>([]);

  useEffect(() => {
    getPetResult(petData?.id).then((res) => {
      setPetResult(res.data.body);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="font-bold text-lg tracking-tighter">
        {petData?.name}의 검사 결과
      </header>

      <div className="w-full flex flex-col items-center">
        <ResultInformation />
        <ResultInformation />
        <ResultInformation />
      </div>
    </>
  );
}
