import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useRef, useEffect } from 'react';
import { Chart } from 'node_modules/chart.js/dist';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function HalfDoughnut() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart: Chart = chartRef.current;
    if (!chart) {
      return;
    }
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;

    // 원의 중심 좌표와 반지름 계산
    const centerX = width / 2;
    const centerY = height / 2;
    const innerRadius = (width / 2) * 0.7; // cutout 비율을 반영
    const outerRadius = width / 2;

    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      innerRadius,
      centerX,
      centerY,
      outerRadius,
    );

    gradient.addColorStop(0, 'rgba(255, 235, 155, 1)');
    gradient.addColorStop(1, 'rgba(232, 232, 232, 0)');

    // 데이터셋에 그라데이션 색상 적용
    chart.data.datasets[0].backgroundColor = gradient;
    chart.update();
  }, []);

  const Data = {
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ['#ffeb9b', '#E8E8E8'],
        circumference: 180,
        rotation: 270,
        cutout: '70%',
      },
    ],
  };

  const Options = {};

  return (
    <div className="w-2/3 h-64 flex justify-center items-start">
      <Doughnut
        ref={chartRef}
        width={100}
        height={100}
        data={Data}
        options={Options}
      ></Doughnut>
    </div>
  );
}
