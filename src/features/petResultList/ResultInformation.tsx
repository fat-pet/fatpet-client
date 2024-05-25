import { PetResult } from '@/types/types';
import { RowBar } from '../chart/CharRowBar';
import SimpleResult from '../result/SimpleResult';

export default function ResultInformation({ data }: { data?: PetResult }) {
  return (
    <div className="w-full my-10">
      <div className="text-sm text-gray-400 mb-3">3월 26일 BCS 검사표</div>
      <div className="w-full h-full border-[1px] border-black flex flex-col items-center justify-center aspect-[3/2] rounded-xl py-10 font-bold space-y-5">
        <div>검사 결과 : 과체중</div>
        <div>
          <RowBar
            name="몸무게"
            unit="kg"
            data={[data?.weight ? data!.weight : 3.5]}
            color="#DD4141"
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
