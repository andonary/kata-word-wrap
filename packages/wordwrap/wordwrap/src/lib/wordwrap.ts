export function wordwrap(line: string, col: number): string {
  if (line.length > col) {
    let jump = 0;
    let back = 0;
    if (line.charAt(col) === ' ') jump = 1;
    if (line.charAt(col - 1) === ' ') back = 1;
    if (line.charAt(col - 2) === ' ') {
      back = 2;
      jump = -1;
    }
    return (
      line.substring(0, col - back) +
      '\n' +
      wordwrap(line.substring(col + jump), col)
    );
  }
  return line;
}
