import letterCombinations from '../code/17.letter-combinations-of-a-phone-number'

test('17.letter-combinations-of-a-phone-number:23', () => {
  expect(letterCombinations("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})

test('17.letter-combinations-of-a-phone-number:2', () => {
  expect(letterCombinations("2")).toEqual(["a", "b", "c"])
})