import ReactApexChart from 'react-apexcharts';

interface Props {
  name: string;
  unit: string;
  data: number[];
  color?: string;
}

export function RowBar({ name, data, unit, color = '#22C55E' }: Props) {
  const options = {
    chart: {
      id: 'test-chart',
      toolbar: {
        show: false, // 툴바 비활성화
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const series = [
    {
      name: name,
      data: data,
      color: color, //그래프 색
    },
  ];

  return (
    <div className="w-full relative">
      <div className="absolute flex items-center">
        <p>{name}</p>
        <p className="text-sm text-gray-400 ml-1">{`(${unit})`}</p>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={'120%'}
        height={'70%'}
      />
    </div>
  );
}
