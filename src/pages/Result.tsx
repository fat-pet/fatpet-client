import HalfDoughnut from '@/features/chart/HalfDoughnut';
import SimpleResult from '@/features/result/SimpleResult';
import { GiWeight } from 'react-icons/gi';
import { FaBowlFood } from 'react-icons/fa6';
export default function Result() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <header className="font-bold text-2xl">검사 결과</header>
      <HalfDoughnut weight="정상" />
      <div className="w-full mt-10">
        <div className="w-full flex justify-between">
          <SimpleResult
            name="체중"
            value="3.6kg"
            Icon={GiWeight}
            comment={`적정 평균 무게
                    3.2kg ~ 4.5kg`}
          />
          <SimpleResult
            name="일일 권장 칼로리"
            value="251kcal"
            Icon={FaBowlFood}
            comment={`입력해주신 사료로는 
            120g 급여하시면 됩니다`}
          />
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="text-2xl font-bold">AI 솔루션</p>
          <div className="w-full h-auto border-2">
            
          </div>
        </div>
      </div>
    </div>
  );
}
