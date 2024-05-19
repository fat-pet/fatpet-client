import { getPetResult } from '@/api/axios';
import ResultInformation from '@/features/petResultList/ResultInformation';
import { useEffect } from 'react';

export default function PetResultList() {
  const data = localStorage.getItem('petData');
  const petData = data ? JSON.parse(data) : null;

  useEffect(() => {
    getPetResult(petData?.id).then(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="font-bold text-lg ">
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
