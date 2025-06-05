export function getSignLabel(num: number): string {
  return num >= 0 ? `+${num}` : String(num);
}
