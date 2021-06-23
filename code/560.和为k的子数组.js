/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map(),
    sum = 0,
    ans = 0
  map.set(0, 1)
  for (let v of nums) {
    sum += v
    if (map.has(sum - k)) {
      ans += map.get(sum - k)
    }
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
  }
  return ans
}

export default subarraySum
// @lc code=end
