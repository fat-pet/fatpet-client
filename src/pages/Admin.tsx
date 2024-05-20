import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="h-full flex flex-col justify-between">
      <header className="text-2xl font-bold">관리자 페이지</header>
      <div className="mb-20">
        <Link
          to="breed"
          className="w-full mt-1 py-3 bg-gray-50 border font-medium border-gray-200 drop-shadow-sm flex justify-center hover:bg-gray-200 hover:cursor-pointer"
        >
          품종별 평균 무게 변경
        </Link>
        <div className="h-12"></div>
        <Link
          to=""
          className="w-full mt-1 py-3 bg-gray-50 border font-medium border-gray-200 drop-shadow-sm flex justify-center hover:bg-gray-200 hover:cursor-pointer"
        >
          품종 추가 / 삭제
        </Link>
      </div>
      <div></div>
    </div>
  );
}

// 품종 전체 조회
// 품종 생성
// 품종 정보 수정
// 품종 삭제
