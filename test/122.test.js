import maxProfit from '../code/122.买卖股票的最佳时机-ii'

test('122.买卖股票的最佳时机-ii:1', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
})

test('122.买卖股票的最佳时机-ii:2', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
})

test('122.买卖股票的最佳时机-ii:3', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0)
})

