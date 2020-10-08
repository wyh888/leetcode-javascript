import maxProfit from '../code/121.买卖股票的最佳时机'

test('121.买卖股票的最佳时机: 1', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
})

test('121.买卖股票的最佳时机: 2', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})
