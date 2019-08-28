/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let result = []
  handler(s, result, [], 0, 0)
  return result
}

/**
 * 
 * @param {string} s
 * @param {array} result
 * @param {string} tmp
 * @param {number} idx
 * @param {number} curr
 */
function handler(s, result, tmp, idx, curr) {
  if (curr === 4) {
    if (idx === s.length) result.push(tmp.join('.'))
    return
  }

  let n = ''
  for (let i = 0; idx + i < s.length && i < 3; i++) {
    let t = [...tmp]
    n += s[idx + i]
    if (Number(n) > 255) break
    t.push(n)
    handler(s, result, t, idx + i + 1, curr + 1)
    if (n === '0') break
  }
}

// restoreIpAddresses('25525511135')

export default restoreIpAddresses
