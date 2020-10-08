/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0
  let dp = [[0, -prices[0]]]

  for (let i = 1; i < prices.length; i++) {
    let item = [
      Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]),
      Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]),
    ]
    dp.push(item)
  }
  return dp[prices.length - 1][0]
}

export default maxProfit
// @lc code=end
