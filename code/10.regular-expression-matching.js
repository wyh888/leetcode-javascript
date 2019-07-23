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
  var memo = []
  for (var i = 0; i <= s.length; i++) {
    memo[i] = []
    for (var j = 0; j <= p.length; j++) {
      memo[i][j] = null
    }
  }

  let dp = (memo, i, j, s, p) => {
    if (memo[i][j] !== null) {
      return memo[i][j] === true
    }
    var ans = false
    if (j === p.length) {
      ans = i === s.length
    } else {
      var firstMatch = (i < s.length) &&
      (p.charAt(j) === s.charAt(i) || p.charAt(j) === ".")
      
      if (j + 1 < p.length && p.charAt(j+1) === "*") {
        ans = (dp(memo, i, j + 2, s, p) ||
          firstMatch && dp(memo, i + 1, j, s, p))
      } else {
        ans = firstMatch && dp(memo, i + 1, j + 1, s, p)
      }
    }
    return ans
  }

  return dp(memo, 0, 0, s, p)
};

// var isMatch = function(s, p) {
//   // 对模式变量进行正则筛选
//   let modeArr = p.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))|(\.)/g)
//   if (!modeArr || !modeArr.length) return false

//   let cur = 0
//   let strLen = s.length
//   for (let i = 0, len = modeArr.length, m; i < len; i++) {
//     // 对于模式分为三类 .*|a*|cdef
//     m = modeArr[i].split('')
//     // 如果第二位是 * 表示是有模式的
//     if (m[1] === '*') {
//       if (m[0] === '.') {
//         cur = strLen
//         break
//       } else {
//         while (s[cur] === m[0]) {
//           cur++
//         }
//       }
//     } else {
//       for (let j = 0; j < m.length; j++) {
//         if (m[j] !== s[cur] && m[j] !== '.') {
//           return false
//         } else {
//           cur++
//         }
//       }
//     }
//   }
//   return cur === strLen
// };

export default isMatch
