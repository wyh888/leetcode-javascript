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
// var maxProfit = function (prices) {
//   if (prices.length < 2) return 0
//   let dp = [[0, -prices[0]]]

//   for (let i = 1; i < prices.length; i++) {
//     let item = [
//       Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]),
//       Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]),
//     ]
//     dp.push(item)
//   }
//   return dp[prices.length - 1][0]
// }

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/best-time-to-buy-and-sell-stock-ii-zhuan-hua-fa-ji/
// 把可能跨越多天的买卖都化解成相邻两天的买卖

// 算法流程：

// 遍历整个股票交易日价格列表 price，策略是所有上涨交易日都买卖（赚到所有利润），所有下降交易日都不买卖（永不亏钱）。
// 1. 设 tmp 为第 i-1 日买入与第 i 日卖出赚取的利润，即 tmp = prices[i] - prices[i - 1] ；
// 2. 当该天利润为正 tmp > 0，则将利润加入总利润 profit；当利润为 00 或为负，则直接跳过；
// 3. 遍历完成后，返回总利润 profit。

var maxProfit = function (prices) {
  if (prices.length < 2) return 0
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    let temp = prices[i] - prices[i - 1]
    if (temp > 0) profit += temp
  }
  return profit
}

export default maxProfit
// @lc code=end
