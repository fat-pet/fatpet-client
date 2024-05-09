import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface Props {
  name1: string;
  data1: number[];
  name2: string;
  data2: number[];
}

const labels = ['January', 'February', 'March'];

export function ColumnBar({ name1, data1, name2, data2 }: Props) {
  const data = {
    labels,
    datasets: [
      // 왼족 막대 그래프
      {
        label: name1,
        data: data1.map((item) => item),
        // 그래프 막대 색
        backgroundColor: 'rgb(22 163 74)',
      },
      //   오른쪽 막대 그래프
      {
        label: name2,
        data: data2.map((item) => item),
        // 그래프 막대 색
        backgroundColor: '#E8E8E8',
      },
    ],
  };

  const option = {
    responsive: true,
  };

  return (
    <div className="w-full my-5">
      <Bar options={option} data={data} />
    </div>
  );
}
