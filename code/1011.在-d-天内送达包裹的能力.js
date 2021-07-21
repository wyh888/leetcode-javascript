/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let isValidOnDay = function (weights, days, W) {
    let consecutive = 0 // 累加的重量
    let realDays = 1 // 实际所需的天数
    for (let i = 0; i < weights.length; i++) {
      if (weights[i] > W) return false // 如果某天的重量超过运载重量，直接返回 false
      consecutive += weights[i]
      if (consecutive > W) { // 超出运载重量
        consecutive = weights[i]
        realDays ++
      }
    }
    return realDays <= days
  }

  let MAX = 1000000001
  let left = 0
  let right = 1000000001
  while (left < right) {
    let mid = (left + right) >> 1
    if (isValidOnDay(weights, days, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  if (right === MAX) right = -1

  return right
};
// @lc code=end

