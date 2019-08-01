import findKthLargest from '../code/215.kth-largest-element-in-an-array'

test('215.kth-largest-element-in-an-array:1', () => {
  expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
})

test('215.kth-largest-element-in-an-array:2', () => {
  expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
})
