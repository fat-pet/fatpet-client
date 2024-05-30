import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRef, useEffect, useState } from 'react';
import 'chart.js/auto';

interface Props {
  weight: string;
}

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HalfDoughnut({ weight = '정상' }: Props) {
  const chartRef = useRef(null);
  const [data, setData] = useState<number[]>([50, 50]);
  useEffect(() => {
    const chart: any = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const width = chart.width;

      // 무게에 따라 그라데이션 색 설정
      let color = '#16A34A'; //정상일 때는 초록

      if (weight === '저체중') {
        //저체중일 때는 파랑
        color = '#60a5fa';
        setData([30, 70]);
      } else if (weight === '과체중') {
        // 과체중일 때는 빨강
        color = '#DD4141';
        setData([70, 30]);
      }

      // 왼쪽에서 오른쪽으로 그라데이션 생성
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(232, 232, 232, 1)'); // 투명 회색
      gradient.addColorStop(1, color); // 진한 초록

      // 데이터셋에 그라데이션 색상 적용
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update(); // 업데이트 호출
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Data = {
    datasets: [
      {
        data: data,
        backgroundColor: ['#16A34A', '#E8E8E8'],
        circumference: 180,
        rotation: 270,
        cutout: '70%',
      },
    ],
  };

  const Options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-2/3 flex justify-center items-center relative">
      <Doughnut ref={chartRef} data={Data} options={Options} />
      <div className="absolute text-2xl font-bold mt-16">{weight}</div>
    </div>
  );
}
