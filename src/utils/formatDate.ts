export default function formatDate(dateArray: number[]) {
  // 배열에서 년, 월, 일, 시, 분, 초, 밀리초를 가져옴
  let [year, month, day, hour, minute, second, millisecond] = dateArray;

  // UTC 시간대 보정 (+9시간)
  let adjustedHour = hour + 9;
  if (adjustedHour >= 24) {
    adjustedHour -= 24;
    // 다음 날로 넘어감
    year = year;
    month = month;
    day = day + 1;
    hour = hour;
    minute = minute;
    second = second;
    millisecond = millisecond;
  }

  // 오후 오후/오전 구분 및 보정
  let period = '오전';
  if (adjustedHour >= 12) {
    period = '오후';
    if (adjustedHour > 12) {
      adjustedHour -= 12;
    }
  }
  console.log(hour + '시');
  console.log(day + '일');
  console.log(adjustedHour + '시 (변경)');

  // 시간과 분을 문자열로 포맷팅
  const formattedTime = `${adjustedHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

  // 날짜를 문자열로 포맷팅
  const formattedDate = `${year.toString().slice(2)}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;

  // 최종 결과 반환
  return `${formattedDate} ${period} ${formattedTime}`;
}

// 예시 날짜 배열
const dateArray = [2024, 5, 19, 13, 37, 9, 807347000];
console.log(formatDate(dateArray)); // 출력: "24.05.19 오후 1:37"