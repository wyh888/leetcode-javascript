/*
 * @lc app=leetcode.cn id=1482 lang=javascript
 *
 * [1482] 制作 m 束花所需的最少天数
 */

// @lc code=start
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
  let isValidOnDay = function(bloomDay, m, k, T) {
    let consecutive = 0 // 连续的花的个数
    let bouguet = 0 // 可以制作的花束
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= T) { // 花已经开了
        consecutive ++
        if (consecutive === k) {
          bouguet ++
          consecutive = 0
        }
      } else {
        consecutive = 0
      }
    }
    return bouguet >= m
  }

  let MAX = 1000000001
  let left = 0
  let right = 1000000001
  while (left < right) {
    let mid = (left + right) >> 1
    if (isValidOnDay(bloomDay, m, k, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  if (right === MAX) right = -1

  return right
};
// @lc code=end

