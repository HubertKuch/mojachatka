export default function numberFormat(
  num: number,
  opts?: { currency: boolean },
): string {
  if (opts?.currency) {
    return new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN",
    }).format(num);
  }

  return new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(num);
}
