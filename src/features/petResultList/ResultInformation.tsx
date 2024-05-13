import { RowBar } from "../Chart/RowBar";

export default function ResultInformation() {
  return (
    <div className="w-full my-10">
      <p className="text-sm text-gray-400 mb-3">3월 26일 BCS 검사표</p>
      <div className="w-full h-full border-[1px] border-black flex flex-col items-center justify-center aspect-[3/2] rounded-xl py-10 font-bold space-y-5">
        <div>
          <RowBar name="몸무게" data={[30, 40]} />
        </div>
        <div>
          <RowBar name="일일 권장 칼로리" data={[3000, 4000]} />
        </div>
        <div>
          <RowBar name="여기에는 뭐 넣지" data={[30, 40]} />
        </div>
      </div>
    </div>
  );
}
