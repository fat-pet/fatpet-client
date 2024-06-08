export default function formatDate(dateArray: number[]) {
  // 배열에서 년, 월, 일, 시, 분, 초, 밀리초를 가져옴
  const [year, month, day, hour, minute, second, millisecond] = dateArray;

  // UTC 시간대 보정 (+9시간)
  let adjustedHour = hour;
  if (adjustedHour >= 24) {
    adjustedHour -= 24;
    // 다음 날로 넘어감
    const date = new Date(
      year,
      month - 1,
      day + 1,
      adjustedHour,
      minute,
      second,
      millisecond,
    );
    return formatDate([
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      adjustedHour,
      minute,
      second,
      millisecond,
    ]);
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
