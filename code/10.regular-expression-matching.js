/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // 对模式变量进行正则筛选
  let modeArr = p.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
  if (!modeArr || !modeArr.length) return false

  let cur = 0
  let strLen = s.length
  for (let i = 0, len = modeArr.length, m; i < len; i++) {
    // 对于模式分为三类 .*|a*|cdef
    m = modeArr[i].split('')
    // 如果第二位是 * 表示是有模式的
    if (m[1] === '*') {
      if (m[0] === '.') {
        cur = strLen
        break
      } else {
        while (s[cur] === m[0]) {
          cur++
        }
      }
    } else {
      for (let j = 0; j < m.length; j++) {
        if (m[j] !== s[cur]) {
          return false
        } else {
          cur++
        }
      }
    }
  }
  return cur === strLen
};

export default isMatch
