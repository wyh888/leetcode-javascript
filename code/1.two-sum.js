/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1、使用 for 循环
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };

// 2、使用 indexOf
// var twoSum = function(nums, target) {
//   let result = []
//   nums.map((item, index) => {
//     if (nums.indexOf(target - item) > -1 && nums.indexOf(target - item) != index) {
//       result = [index, nums.indexOf(target - item)].sort()
//     }
//   })
//   return result
// }

// 3、使用 map
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
}

export default twoSum
