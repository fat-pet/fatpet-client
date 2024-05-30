export default function formatGPT(gptAnswer: string): string[][] {
  const gpt = gptAnswer.split('\n\n');
  const answer: string[][] = [];
  gpt.forEach((item) => {
    const ans = item.split('\n');
    ans[0] = ans[0].replace('-', '').trim();
    answer.push(ans);
  });
  return answer;
}
