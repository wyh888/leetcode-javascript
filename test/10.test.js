import isMatch from '../code/10.regular-expression-matching'

test('10.regular-expression-matching:1', () => {
  expect(isMatch("ab", ".*")).toBe(true)
})

test('10.regular-expression-matching:2', () => {
  expect(isMatch("aab", "c*a*b")).toBe(true)
})

test('10.regular-expression-matching:3', () => {
  expect(isMatch("mississippi", "mis*is*p*.")).toBe(false)
})
