import ReactApexChart from 'react-apexcharts';

interface Props {
  name: string;
  data: number[];
}

export function RowBar({ name, data }: Props) {
  const options = {
    chart: {
      id: 'test-chart',
    },
    xaxis: {
      categories: ['현재', '목표'],
    },
    // colors:['#F44336', '#22C55E', '#9C27B0'],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  const series = [
    {
      name: name,
      data: data,
      color: '#22C55E',
    },
  ];

  return (
    <div className="w-full">
      <p>{name}</p>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={'100%'}
        height={'80%'}
      />
    </div>
  );
}
