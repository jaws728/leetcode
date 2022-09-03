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
var maxProfit = function(prices) {
  if (prices.length < 2) return 0

  /**
   * 动态规划：
   *  1. dp定义
   *    - dp[i][j]：i表示当下的天数，j表示是否持股（0为否，1为是），dp存储的则是利润
   *  2. 公式：
   *    - 不持股：max（之间不持股继续不持股vs之前持股后卖出）
   *    - 持股：max（之前持股继续持股vs之前不持股买入）
   */
  
  let dp0 = [], dp1 = []
  dp0[0] = 0
  dp1[0] = -prices[0]

  for (let i = 1; i < prices.length; i++){
    dp0[i] = Math.max(dp0[i-1], dp1[i-1] + prices[i])
    dp1[i] = Math.max(dp1[i-1], -prices[i])
  }

  // 返回不持股
  return dp0[prices.length - 1]
};
// @lc code=end

