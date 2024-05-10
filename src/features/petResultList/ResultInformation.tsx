import { RowBar } from "../Chart/RowBar";

export default function ResultInformation() {
  return (
    <div className='w-full my-10'>
      <p className='text-sm text-gray-400'>3월 26일 BCS 검사표</p>
      <div className='w-full border-[1px] border-black flex flex-col items-center justify-center aspect-[3/2] rounded-xl'>
        <RowBar name1='kg' data1={[10, 30]} />
        <RowBar name1='kg' data1={[10, 30]} />
        <RowBar name1='kg' data1={[10, 30]} />
      </div>
    </div>
  );
}
