import canPlaceFlowers from '../code/605.can-place-flowers'

test('605.can-place-flower', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true)
})

test('605.can-place-flower:2', () => {
  expect(canPlaceFlowers([1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], 3)).toBe(true)
})
