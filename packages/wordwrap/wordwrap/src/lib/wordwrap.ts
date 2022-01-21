function splitIntoParts(text: string, col: number, space = 0) {
  let firstPart = text.substring(0, col + space);
  let secondPart = text.substring(col);
  return { firstPart, secondPart };
}

function hasCutAfterSpace(firstPart: string) {
  return firstPart.charAt(firstPart.length - 2) === ' ';
}

function hasStopAtSpace(firstPart: string) {
  return firstPart.endsWith(' ');
}

function hasStopBeforeSpace(firstPart: string) {
  return firstPart.startsWith(' ');
}

export function wordwrap(text: string, col: number): string {
  text = text.trim();
  if (text.length > col) {
    let { firstPart, secondPart } = splitIntoParts(text, col);
    if (hasStopBeforeSpace(firstPart)) {
      ({ firstPart, secondPart } = splitIntoParts(text, col));
    }
    if (hasStopAtSpace(firstPart)) {
      ({ firstPart, secondPart } = splitIntoParts(text, col, -1));
    }
    if (hasCutAfterSpace(firstPart)) {
      ({ firstPart, secondPart } = splitIntoParts(text, col - 1, -1));
    }
    return firstPart + '\n' + wordwrap(secondPart, col);
  }
  return text;
}
