import findSubstring from '../code/30.substring-with-concatenation-of-all-words'

test('30.substring-with-concatenation-of-all-words', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})

test('30.substring-with-concatenation-of-all-words', () => {
  expect(
    findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
  ).toEqual([])
})
