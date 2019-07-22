/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let reg = /^(\w+)\1+$/
  return reg.test(s)
};

export default repeatedSubstringPattern

