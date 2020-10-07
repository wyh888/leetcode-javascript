import intersect from '../code/350.两个数组的交集-ii'

test('350.两个数组的交集-ii:1', () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
})

test('350.两个数组的交集-ii:2', () => {
  expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
})
