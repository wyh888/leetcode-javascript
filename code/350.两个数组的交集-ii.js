/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let arr1Obj = {}
  let arr2Obj = {}
  let result = []

  nums1.forEach(item => {
    arr1Obj[item] = arr1Obj[item] ? arr1Obj[item] + 1 : 1
  })

  nums2.forEach((item) => {
    arr2Obj[item] = arr2Obj[item] ? arr2Obj[item] + 1 : 1
  })

  let temp = new Set(Object.keys(arr1Obj).concat(Object.keys[arr2Obj]))

  temp.forEach(item => {
    let num = Math.min(arr1Obj[item], arr2Obj[item])
    while(num --) {
      result.push(parseInt(item))
    }
  })

  return result
}

export default intersect
// @lc code=end

