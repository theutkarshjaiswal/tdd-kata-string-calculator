export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

    let delimiter = /,|\n/;

  const numList = numbers.split(delimiter);
  return numList
    .filter((num) => parseInt(num) <= 1000)
    .reduce((sum, num) => sum + (parseInt(num) || 0), 0);
}
