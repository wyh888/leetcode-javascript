import repeatedSubstringPattern from '../code/459.repeated-substring-pattern'

test('459.repeated-substring-pattern:1', () => {
  expect(repeatedSubstringPattern("aba")).toBe(false)
})

test('459.repeated-substring-pattern:2', () => {
  expect(repeatedSubstringPattern("ababab")).toBe(true)
})
