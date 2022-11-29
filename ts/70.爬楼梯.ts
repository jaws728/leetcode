/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n === 1) return 1
  if (n === 2) return 2

  // dp[i] = dp[i-1] + dp[i-2]
  let dp: number[] = [], i = 2
  dp[0] = 1
  dp[1] = 2

  for (; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[i-1]
};
// @lc code=end
