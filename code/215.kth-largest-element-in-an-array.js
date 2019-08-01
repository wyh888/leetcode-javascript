/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//   return nums.sort((a, b) => b - a)[k - 1]
// };

var findKthLargest = function(nums, k) {
  let len = nums.length - 1
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j+1]) {
        let tmp = nums[j + 1]
        nums[j+1] = nums[j]
        nums[j] = tmp
      }
    }
  }

  return nums[len - (k - 1)]
}

export default findKthLargest

