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

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March'];
const datas = [
    {
        name: '4/17',
        kg: 35,
        BCS: 8,
    },
    {
        name: '4/25',
        kg: 25,
        BCS: 6,
    },
    {
        name: '5/6',
        kg: 23,
        BCS: 5,
    },
];
export const data = {
    labels,
    datasets: [
        {
            label: 'kg',
            data: datas.map((item) => item.kg),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'BCS',
            data: datas.map((item) => item.BCS),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function TestBar() {
    return <Bar options={options} data={data} />;
}
