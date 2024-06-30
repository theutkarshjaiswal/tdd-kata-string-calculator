export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, delimiterEndIndex);
    const delimiters = delimiterSection.match(/\[(.*?)\]/g);
    if (delimiters) {
      delimiter = new RegExp(
        delimiters.map((d) => escapeRegExp(d.slice(1, -1))).join("|")
      );
    } else {
      delimiter = new RegExp(escapeRegExp(delimiterSection));
    }
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const numList = numbers.split(delimiter);
  return numList
    .filter((num) => parseInt(num) <= 1000)
    .reduce((sum, num) => sum + (parseInt(num) || 0), 0);
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
