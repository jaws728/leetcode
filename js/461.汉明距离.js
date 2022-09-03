/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let d = 0
  for (let xor = x ^ y; xor != 0; xor &= xor-1){
    // 按照xor&=xor-1的公式可以得知最后还剩多少个1直到没有1为止 = 汉明距离
    d++
  }
  return d
};
// @lc code=end

