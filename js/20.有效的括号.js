/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []

  for (let i = 0; i < s.length; i++){
    if (s[i] === '('){
      stack.push(')')
    } else if (s[i] === '['){
      stack.push(']')
    } else if (s[i] === '{'){
      stack.push('}')
    } else if (stack.length === 0 || stack.pop() != s[i]){
      return false
    }
  }

  return stack.length === 0 //isEmpty
};
// @lc code=end

