/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let res = 0
  for (let i = 0; i<s.length; i++){
    if (romanInt[s[i]] < romanInt[s[i+1]])
      res -= romanInt[s[i]]
    else
      res += romanInt[s[i]]
  }
  return res
};
// @lc code=end