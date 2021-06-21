import plusOne from '../code/66.加一'

test('66.加一: 1', () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
})

test('66.加一: 2', () => {
  expect(plusOne([9])).toEqual([1, 0])
})

test('66.加一: 3', () => {
  expect(plusOne([9, 9])).toEqual([1, 0, 0])
})
