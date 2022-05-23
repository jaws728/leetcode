/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  let num = x
  let rev = 0
  i = 0
 
  do {
      a = num % 10
      rev = rev * 10 + a
      num = Math.floor(num / 10)
      i++;
  } while (num)
  return (rev === x)
  // if (rev == x){
  //   return true
  // }
  // return false
};
// @lc code=end
