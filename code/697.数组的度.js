/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let numsMap = {}
  let maxNum = 0
  let minLen = 0
  // 循环数组，记录数组中出现数字的个数以及最早最晚的出现位置
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (numsMap[num]) {
      numsMap[num][0] ++
      numsMap[num][2] = i
    } else {
      numsMap[num] = [1, i, i]
    }
  }

  // 遍历哈希表
  Object.keys(numsMap).forEach(num => {
    if (numsMap[num][0] > maxNum) {
      maxNum = numsMap[num][0]
      minLen = numsMap[num][2] - numsMap[num][1] + 1
      // 如果数字出现的次数一样多，则取度更小的
    } else if (numsMap[num][0] === maxNum) {
      if (minLen > numsMap[num][2] - numsMap[num][1] + 1) {
        minLen = numsMap[num][2] - numsMap[num][1] + 1
      }
    }
  })

  return minLen
};

export default findShortestSubArray
// @lc code=end

