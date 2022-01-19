import { wordwrap } from './wordwrap';

describe('wordwrap', () => {
  it.each([
    {
      itMsg: 'it should wrap empty input',
      word: '',
      column: 0,
      expectedResult: '',
    },
    {
      itMsg: 'it should wrap nothing',
      word: 'word',
      column: 5,
      expectedResult: 'word',
    },
    {
      itMsg: 'it should wrap my only word',
      word: 'word',
      column: 3,
      expectedResult: 'wor\nd',
    },
    {
      itMsg: 'it should wrap my two words',
      word: 'word word',
      column: 3,
      expectedResult: 'wor\nd\nwor\nd',
    },
    {
      itMsg: 'it should wrap my two words',
      word: 'word word',
      column: 4,
      expectedResult: 'word\nword',
    },
    {
      itMsg: 'it should wrap my two words',
      word: 'word word',
      column: 6,
      expectedResult: 'word\nword',
    },
  ])('$itMsg', (cases) => {
    // Given
    const { word, column, expectedResult } = cases;

    // When
    const wraped: string = wordwrap(word, column);

    // Then
    expect(wraped).toEqual(expectedResult);
  });
});
