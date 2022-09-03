/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 暴力循环
  // return loop(nums)
  // 动态规划
  return dynamic(nums)
};

function loop(n){
  let max = n[0]

  for (let i = 0; i < n.length; i++){
    let temp = 0
    for (let j = i; j < n.length; j++){
      temp += n[j]
      if (temp > max){
        max = temp
      }
    }
  }

  return max
}

function dynamic(n){
  let dp = [n[0]], max = dp[0]

  /**
   * 公式：将当下的值与之前最大的值+当下的值进行对比
   *      dp定义：包括下标i之前最大连续子序列和
   *      dp[i] = max(n[i], dp[i-1]+n[i])
   */

  for (let i = 1; i < n.length; i++){
    dp[i] = Math.max(n[i],dp[i-1] + n[i])
    if (dp[i] > max) {
      max = dp[i]
    }
  }

  return max
}
// @lc code=end

