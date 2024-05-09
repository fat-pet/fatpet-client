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
}

const labels = ['목표체중', '현재 체중'];

export function RowBar({ name1, data1 }: Props) {
    const data = {
        labels,
        datasets: [
            {
                label: name1,
                data: data1.map((item) => item),
                backgroundColor: '#51A1FF',
            },
        ],
    };

    const option = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        plugin: {
            legend: {
                position: 'none',
            },
        },
        responsive: true,
    };

    return (
        <div className="w-full">
            <div className="w-full h-24">
                <Bar options={option} data={data} />
            </div>
        </div>
    );
}
