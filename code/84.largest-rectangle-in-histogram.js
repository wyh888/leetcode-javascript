/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

 /**
 * 思路1: 暴力解法，获取两两相邻的柱子之间形成的矩形面积，该矩形的高为它们之间最矮柱子的高度，宽为它们之间的距离。
 * 时间复杂度: O(n^3)
 * 空间复杂度: O(1)
 */
// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0

  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
      let minHeight = Number.MAX_SAFE_INTEGER
      for (let k = i; k <= j; k++) {
        minHeight = Math.min(minHeight, heights[k])
      }
      maxArea = Math.max(maxArea, minHeight * (j - i + 1))
    }
  }
  return maxArea
};
// @lc code=end

 /**
 * 思路2: 优化暴力解法
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(1)
 */
// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0

  for (let i = 0; i < heights.length; i++) {
    let minHeight = Number.MAX_SAFE_INTEGER
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j])
      maxArea = Math.max(maxArea, minHeight * (j - i + 1))
    }
  }
  return maxArea
};
// @lc code=end

// export default largestRectangleArea

