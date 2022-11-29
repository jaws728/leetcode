/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++){
    if (s[i] === ')'){
      // 1. ()
      if (stack.pop() !== '('){
        return false;
      }
    } else if (s[i] === '}'){
      // 2. {}
      if (stack.pop() !== '{'){
        return false;
      }
    } else if (s[i] === ']'){
      // 3. []
      if (stack.pop() !== '['){
        return false
      }
    } else {
      stack.push(s[i])
    }
  }
  if (stack.length !== 0) return false;
  return true;
};
// @lc code=end

//([])