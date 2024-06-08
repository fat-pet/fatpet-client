import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRef, useEffect, useState } from 'react';
import 'chart.js/auto';

interface Props {
  weight: '정상' | '과체중' | '저체중';
}

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HalfDoughnut({ weight = '정상' }: Props) {
  const chartRef = useRef<Chart<'doughnut'> | null>(null);
  const [data, setData] = useState<number[]>([50, 50]);
  const [color, setColor] = useState<string>('#16A34A');

  useEffect(() => {
    if (weight === '저체중') {
      setColor('#60a5fa');
      setData([30, 70]);
    } else if (weight === '과체중') {
      setColor('#DD4141');
      setData([70, 30]);
    } else {
      setColor('#16A34A');
      setData([50, 50]);
    }
  }, [weight]);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const width = chart.width;

      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(232, 232, 232, 1)'); // 투명 회색
      gradient.addColorStop(1, color); // 진한 초록, 파랑, 빨강

      chart.data.datasets[0].backgroundColor = [gradient, '#E8E8E8'];
      chart.update(); // 업데이트 호출
    }
  }, [color, data]);

  const Data = {
    datasets: [
      {
        data: data,
        backgroundColor: [color, '#E8E8E8'],
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
