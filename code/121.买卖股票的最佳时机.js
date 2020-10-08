/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//   let maxProfit = 0

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let profit = prices[j] - prices[i]
//       if (profit > 0 && profit > maxProfit) {
//         maxProfit = profit
//       }
//     }
//   }

//   return maxProfit
// };

var maxProfit = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }
  }

  return maxProfit
}

export default maxProfit
// @lc code=end

