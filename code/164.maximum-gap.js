/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) return 0

  nums.sort((a,b) => a - b)
  let max = 0
  for (let i = 0, tmp; i < nums.length - 1; i++) {
    tmp = nums[i + 1] - nums[i]
    if (tmp > max) {
      max = tmp
    }
  }
  return max
};

export default maximumGap

