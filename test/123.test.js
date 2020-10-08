import maxProfit from '../code/123.买卖股票的最佳时机-iii'

test('123.买卖股票的最佳时机-iii:1', () => {
  expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6)
})

test('123.买卖股票的最佳时机-iii:2', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
})

test('123.买卖股票的最佳时机-iii:3', () => {
  expect(maxProfit([6, 1, 3, 2, 4, 7])).toBe(7)
})

test('123.买卖股票的最佳时机-iii:4', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})

test('123.买卖股票的最佳时机-iii:5', () => {
  expect(maxProfit([1])).toBe(0)
})
