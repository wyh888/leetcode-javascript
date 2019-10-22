/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

/**
 * 思路：利用栈的特性
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let result = []

  for (let i = 0; i < ops.length; i++) {
    let resultLen = result.length
    if (ops[i] === '+') {
      result.push(parseInt(result[resultLen - 1]) + parseInt(result[resultLen - 2]))
    } else if (ops[i] === 'D') {
      result.push(parseInt(result[resultLen - 1]) * 2)
    } else if (ops[i] === 'C') {
      result.pop()
    } else {
      result.push(parseInt(ops[i]))
    }
  }

  return result.reduce((total, num) => total + num)
};

export default calPoints
// @lc code=end
