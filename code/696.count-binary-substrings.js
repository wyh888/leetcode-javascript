/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let r = []

  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }

  for (let i = 0, len = s.length - 1; i < len; i++) {
    let sub = match(s.slice(i))
    if (sub) {
      r.push(sub)
    }
  }

  return r.length
};

export default countBinarySubstrings

