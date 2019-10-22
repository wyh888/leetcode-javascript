import calPoints from '../code/682.baseball-game'

test('682.baseball-game:1', () => {
  expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30)
})

test('682.baseball-game:2', () => {
  expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
