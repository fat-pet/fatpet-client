export default function formatWeight(pound: number) {
  const kg = Math.floor(pound * 0.453592);
  return kg;
}
