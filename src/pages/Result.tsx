import HalfDoughnut from '@/features/chart/HalfDoughnut';

export default function Result() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <header className="font-bold text-xl">검사 결과</header>
      <HalfDoughnut />
    </div>
  );
}
