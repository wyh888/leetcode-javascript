import longestCommonPrefix from '../code/14.最长公共前缀'

test('14.最长公共前缀:1', () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
})

test('14.最长公共前缀:2', () => {
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe('')
})

test('14.最长公共前缀:3', () => {
  expect(longestCommonPrefix(['ab', 'a'])).toBe('a')
})
