/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let sum = [], carry = 0
  
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >=0; i--, j--){
    let x = num1.charAt(i) - '0'
    let y = num2.charAt(j) - '0'
    let d = (x + y + carry) % 10
    carry = Math.floor((x + y + carry) / 10)
    sum.push(d)
  }

  if (carry != 0){
    sum.push(carry)
  }

  return sum.reverse().join('')
};
// @lc code=end

