import subdomainVisits from '../code/811.子域名访问计数'

test('811.子域名访问计数', () => {
  expect(subdomainVisits(['9001 discuss.leetcode.com'])).toEqual([
    '9001 com',
    '9001 leetcode.com',
    '9001 discuss.leetcode.com',
  ])
})
