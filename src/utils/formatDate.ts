export default function formatDate(dateArray: number[]) {
  // 배열에서 년, 월, 일, 시, 분, 초, 밀리초를 가져옴
  let [year, month, day, hour, minute] = dateArray;

  // UTC 시간대 보정 (+9시간)
  let adjustedHour = hour + 9;
  if (adjustedHour >= 24) {
    adjustedHour -= 24;
    // 다음 날로 넘어감
    day = day + 1;
    hour = adjustedHour;
  }

  if (month in [1, 3, 5, 7, 8, 10, 12] && day > 31) {
    month = month + 1;
    day = 1;
  } else if (month in [4, 6, 9, 11] && day > 30) {
    month = month + 1;
    day = 1;
  } else if (month === 2 && day > 28) {
    month = month + 1;
    day = 1;
  }

  if (month > 12) {
    year = year + 1;
    month = 1;
  }

  // 오후 오후/오전 구분 및 보정
  let period = '오전';
  if (adjustedHour >= 12) {
    period = '오후';
    if (adjustedHour > 12) {
      adjustedHour -= 12;
    }
  }

  // 시간과 분을 문자열로 포맷팅
  const formattedTime = `${adjustedHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

  // 날짜를 문자열로 포맷팅
  const formattedDate = `${year.toString().slice(2)}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;

  // 최종 결과 반환
  return `${formattedDate} ${period} ${formattedTime}`;
}
