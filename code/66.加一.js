/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 加数
  let add = 1
  // 反转数组更容易做进位操作
  let reverseDigits = digits.reverse()
  for (let i = 0; i < reverseDigits.length; i++) {
    let addResult = reverseDigits[i] + add

    // 如果相加不进位直接返回数组，相反做循环进位操作
    if (addResult >= 10) {
      reverseDigits[i] = addResult % 10
      add = parseInt(addResult / 10)
      // 如果是最后一位了，则进一位
      if (i === reverseDigits.length - 1) {
        reverseDigits[reverseDigits.length] = 0
      }
    } else {
      reverseDigits[i] = addResult
      return reverseDigits.reverse()
    }
  }

  return reverseDigits.reverse()
};

export default plusOne
// @lc code=end

