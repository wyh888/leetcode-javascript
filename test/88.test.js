import merge from '../code/88.合并两个有序数组'

test('88.合并两个有序数组', () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6])
})
