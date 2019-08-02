/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//   let arr = nums.filter(item => item > 0)

//   if (arr.length) {
//     arr.sort((a, b) => a - b)
//     if (arr[0] === 1) {
//       for (let i = 0, len = arr.length; i < len; i++) {
//         if (arr[i+1] - arr[i] > 1) {
//           return arr[i] + 1
//         }
//       }
//       return arr.pop() + 1
//     }
//   }

//   return 1
// };

// 用选择排序
var firstMissingPositive = function(nums) {
  let arr = nums.filter(item => item > 0)
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let tmp = min
        min = arr[j]
        arr[j] = tmp
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }

  return arr.length ? arr.pop() + 1 : 1
}

export default firstMissingPositive

