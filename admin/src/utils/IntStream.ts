export default function IntStream(size: number) {
  const initial: number[] = [];

  for (let i = 0; i < size; i++) initial.push(0);

  return initial;
}
