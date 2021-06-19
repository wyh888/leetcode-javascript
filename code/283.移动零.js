/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let n = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[n] = nums[i]
      n++
    }
  }
  // 补 0
  while(n < nums.length) {
    nums[n] = 0
    n++
  }
  return nums
};

export default moveZeroes
// @lc code=end

