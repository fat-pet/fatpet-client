import React from 'react';
import HalfDoughnut from '@/features/chart/HalfDoughnut';
import SimpleResult from '@/features/result/SimpleResult';
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

function formatBSC(bcs: string): string {
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
            value={weight}
            comment={`적정 평균 무게\n${value.avgWeightLow}kg~${value.avgWeightHigh}kg`}
          />
          <SimpleResult
            name="일일 권장 칼로리"
            value={`${value.der}kcal`}
            comment="적정 사료량 : 120g"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="text-2xl font-bold">AI 솔루션</p>
          <div className="w-full h-auto border-2 p-4">{value.gptSolution}</div>
        </div>
      </div>
    </div>
  );
}
