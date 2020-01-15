import maxProfit from '../code/121.best-time-to-buy-and-sell-stock'

test('121.best-time-to-buy-and-sell-stock: 1', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
})

test('121.best-time-to-buy-and-sell-stock: 2', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})
