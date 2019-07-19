import canPlaceFlowers from '../code/605.can-place-flowers'

test('605.can-place-flower', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('605.can-place-flower:2', () => {
  expect(canPlaceFlowers([1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1], 3)).toBe(true)
})
