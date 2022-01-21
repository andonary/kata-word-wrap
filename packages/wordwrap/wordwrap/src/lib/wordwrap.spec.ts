import { wordwrap } from './wordwrap';

describe('wordwrapWordwrap', () => {
  it('should not wrap when it is not required', () => {
    expect(wordwrap('', 0)).toEqual('');
    expect(wordwrap('word', 9)).toEqual('word');
  });

  it('should wrap my only word', () => {
    expect(wordwrap('typescript', 6)).toEqual('typesc\nript');
    expect(wordwrap('typescript', 4)).toEqual('type\nscri\npt');
  });

  it('should wrap my two words', () => {
    expect(wordwrap('jean paul', 4)).toEqual('jean\npaul');
    expect(wordwrap('jean paul', 5)).toEqual('jean\npaul');
    expect(wordwrap('jean paul', 6)).toEqual('jean\npaul');
  });
});
