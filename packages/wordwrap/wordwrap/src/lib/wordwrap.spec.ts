import { wordwrap } from './wordwrap';

describe('wordwrap', () => {
  function assertWordWrap(textToWrap: string, col: number, result: string) {
    expect(wordwrap(textToWrap, col)).toEqual(result);
  }

  test('it should return empty string', async () => {
    assertWordWrap('', 9, '');
  });

  test('it should return word for a large column', async () => {
    assertWordWrap('word', 9, 'word');
  });

  test('it should wrap my only word', async () => {
    assertWordWrap('wordwo', 3, 'wor\ndwo');
    assertWordWrap('wordword', 3, 'wor\ndwo\nrd');
    assertWordWrap('wordwordword', 3, 'wor\ndwo\nrdw\nord');
  });

  test('it should wrap my two words', async () => {
    assertWordWrap('word word', 5, 'word\nword');
    assertWordWrap('word word', 6, 'word\nword');
    assertWordWrap('word word', 4, 'word\nword');
  });
});
