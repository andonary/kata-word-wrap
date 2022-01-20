function isColStopAtSpace(textToWrap: string, columns: number) {
  return textToWrap.charAt(columns - 1) === ' ';
}

function isColStopAfterSpace(textToWrap: string, columns: number) {
  return textToWrap.charAt(columns - 2) === ' ';
}

function isColStopBeforeSpace(textToWrap: string, columns: number) {
  return textToWrap.charAt(columns) === ' ';
}

function splitIntoParts(textToWrap: string, columns: number, jump = false) {
  let firstPart = textToWrap.substring(0, columns);
  let secondPart = textToWrap.substring(jump ? columns + 1 : columns);
  return { firstPart, secondPart };
}

export function wordwrap(textToWrap: string, columns: number): string {
  if (textToWrap.length > columns) {
    let { firstPart, secondPart } = splitIntoParts(textToWrap, columns);
    if (isColStopAtSpace(textToWrap, columns)) {
      ({ firstPart, secondPart } = splitIntoParts(
        textToWrap,
        columns - 1,
        true
      ));
    }
    if (isColStopAfterSpace(textToWrap, columns)) {
      ({ firstPart, secondPart } = splitIntoParts(
        textToWrap,
        columns - 2,
        true
      ));
    }
    if (isColStopBeforeSpace(textToWrap, columns)) {
      ({ firstPart, secondPart } = splitIntoParts(textToWrap, columns, true));
    }
    return firstPart + '\n' + wordwrap(secondPart, columns);
  }
  return textToWrap;
}
