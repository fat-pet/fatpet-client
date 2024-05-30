import HalfDoughnut from '@/features/chart/HalfDoughnut';
import GptResult from '@/features/result/GptResult';
import SimpleResult from '@/features/result/SimpleResult';
import formatGPT from '@/utils/formatGPT';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ValueProps {
  bcs: string;
  avgWeightLow: number;
  avgWeightHigh: number;
  der: number;
  gptSolution: string;
}

interface Props {
  value: ValueProps;
  weight: string;
}

function formatBSC(bcs: string): '정상' | '저체중' | '과체중' {
  if (bcs === 'UNDER') {
    return '저체중';
  } else if (bcs === 'IDEAL') {
    return '정상';
  } else {
    return '과체중';
  }
}

export default function Result() {
  const location = useLocation();
  const state = location.state as Props | undefined;
  const petData = localStorage.getItem('petData');
  const [gptAnswer] = useState<string[][]>(
    formatGPT(state!.value!.gptSolution),
  );
  const feedAmount = petData && JSON.parse(petData)['feedCalories'];
  // 기본값 설정
  const value: ValueProps = state?.value || {
    bcs: 'IDEAL',
    avgWeightLow: 2.5,
    avgWeightHigh: 4.0,
    der: 251,
    gptSolution: 'AI 솔루션 내용',
  };
  const weight = state?.weight || '3.6kg';
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <header className="font-bold text-2xl">검사 결과</header>
      <HalfDoughnut weight={formatBSC(value.bcs)} />
      <div className="w-full mt-10">
        <div className="w-full flex justify-evenly">
          <SimpleResult
            name="체중"
            value={`${weight}kg`}
            comment={`적정 평균 무게\n${value.avgWeightLow}kg~${value.avgWeightHigh}kg`}
          />
          <SimpleResult
            name="일일 권장 칼로리"
            value={`${value.der}kcal`}
            comment={`적정 사료량 : ${Math.ceil((value.der / feedAmount) * 100)}g`}
          />
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          {gptAnswer.map((item, key) => {
            return <GptResult key={key} gptAnswer={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
