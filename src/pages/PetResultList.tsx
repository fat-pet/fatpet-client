import { getPetResult } from '@/api/axios';
import ResultInformation from '@/features/petResultList/ResultInformation';
import { PetResult } from '@/types/types';
import { useEffect, useState } from 'react';

export default function PetResultList() {
  const data = localStorage.getItem('petData');
  const petData = data ? JSON.parse(data) : null;
  const [resultData, setResultData] = useState<PetResult[]>();
  useEffect(() => {
    getPetResult(petData?.id).then((res) => {
      setResultData(res.data.body);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="font-bold text-lg ">
        {petData?.name}의 검사 결과
      </header>

      <div className="w-full flex flex-col items-center">
        {/* {resultData?.map((item) => {
          return <ResultInformation key={item.id} data={item} />;
        })} */}
        <ResultInformation />
        <ResultInformation />
        <ResultInformation />
      </div>
    </>
  );
}
