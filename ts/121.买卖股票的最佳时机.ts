/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 极端环境
  if (prices.length < 2) return 0;

  /**
   * DP思路：
   *  1. 转移方程
   *    - 定义状态：f(i) = 到a[i]为止到最小值
   *    - 设计转移方程：f(i+1) = min(f(i), a[i+1])
   *  2. 初始条件：迭代初始值
   *    - min：代表最小值
   *    - max：代表i天的最大利润
   *      - max_i = max{max_i-1，price_i - min}
   *  3. 特殊处理：小size问题 —— size小无法带入方程
   */
  
  let max = 0;
  let min = prices[0];
  // dp思路 = 两种假设：1 - 之前买了现在卖，2 - 之前没买现在买
  // let dp1 = []
  // let dp2 = []
  for (let p of prices){
    // 需要找到最小的值和最大的利润：由于利润与天数挂钩，因此不能单纯的找最大值
    min = Math.min(min, p)
    max = Math.max(max, p - min)
  }
  return max;
};
// @lc code=end

