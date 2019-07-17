/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */

// 问题：RegExp too big
// var countBinarySubstrings = function(s) {
//   let r = []

//   let match = (str) => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     let reg = new RegExp(`^(${j}${o})`)
//     if (reg.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }

//   for (let i = 0, len = s.length - 1; i < len; i++) {
//     let sub = match(s.slice(i))
//     if (sub) {
//       r.push(sub)
//     }
//   }

//   return r.length
// };

// 问题：运行时间太长，性能不佳
// var countBinarySubstrings = function(s) {
//   let count = 0

//   let match = (str) => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     return j + o === str.slice(0, j.length * 2)
//   }

//   for (let i = 0, len = s.length - 1; i < len; i++) {
//     let sub = match(s.slice(i))
//     sub && count++
//   }

//   return count
// };

var countBinarySubstrings = function(s) {
  if (!s) {
    return 0
  }
  
  var count = 0
  var preCount = 0
  var curCount = 0
  var p = s.substring(0, 1)
  for (var digit of s) {
    if (digit === p) {
      curCount++
    } else {
      count += Math.min(preCount, curCount)
      preCount = curCount
      curCount = 1
      p = digit
    }
  }
  
  return count + Math.min(preCount, curCount)
};

export default countBinarySubstrings

