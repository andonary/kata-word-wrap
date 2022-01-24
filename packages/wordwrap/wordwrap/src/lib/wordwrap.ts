function isStopAtSpace(line: string, col: number) {
  return line.charAt(col) === ' ';
}

function isStopAfterSpace(line: string, col: number) {
  return line.charAt(col - 1) === ' ';
}

function isStopAfterFirstLetter(line: string, col: number) {
  return line.charAt(col - 2) === ' ';
}

export function wordwrap(line: string, col: number): string {
  if (line.length > col) {
    let firstPart = line.substring(0, col);
    let secondPart = line.substring(col);
    if (isStopAtSpace(line, col)) secondPart = line.substring(col + 1);
    if (isStopAfterSpace(line, col)) firstPart = line.substring(0, col - 1);
    if (isStopAfterFirstLetter(line, col)) {
      firstPart = line.substring(0, col - 2);
      secondPart = line.substring(col - 1);
    }
    return firstPart + '\n' + wordwrap(secondPart, col);
  }
  return line;
}
