export function wordwrap(word: string, column: number): string {
  if (word.length > column) {
    const space = word.substring(0, column + 1).lastIndexOf(' ');
    if (space > -1)
      return (
        word.substring(0, space) +
        '\n' +
        wordwrap(word.substring(space + 1), column)
      );
    return (
      word.substring(0, column) +
      '\n' +
      wordwrap(word.substring(column), column)
    );
  }
  return word;
}
