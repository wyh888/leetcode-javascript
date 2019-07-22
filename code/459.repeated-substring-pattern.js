/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function(s) {
//   let reg = /^(\w+)\1+$/
//   return reg.test(s)
// };

var repeatedSubstringPattern = function(s) {
  let str = s + s
  return str.slice(1, str.length - 1).includes(s)
}

export default repeatedSubstringPattern

