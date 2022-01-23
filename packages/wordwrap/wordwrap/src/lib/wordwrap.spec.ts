import { wordwrap } from './wordwrap';

describe('wordwrap', () => {
  it('should wrap my word', () => {
    expect(wordwrap('', 1)).toEqual('');
    expect(wordwrap('x', 1)).toEqual('x');
    expect(wordwrap('xx', 1)).toEqual('x\nx');
    expect(wordwrap('xxx', 1)).toEqual('x\nx\nx');
    expect(wordwrap('x x', 1)).toEqual('x\nx');
    expect(wordwrap('x x x', 1)).toEqual('x\nx\nx');
    expect(wordwrap('x x', 2)).toEqual('x\nx');
    expect(wordwrap('jean paul', 6)).toEqual('jean\npaul');
    expect(
      wordwrap(
        'jean alphonse lit un livre sur javascript et trouve cela cool',
        5
      )
    ).toEqual(
      'jean\nalpho\nnse\nlit\nun li\nvre\nsur\njavas\ncript\net tr\nouve\ncela\ncool'
    );
  });
});
