/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  let ans = 40
  while(ans >= 40){
    ans = (rand7() - 1) * 7 + rand7() - 1
  }
  return ans % 10 - 1
};
// @lc code=end
