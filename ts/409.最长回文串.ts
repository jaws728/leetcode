/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
  let count = 0, arr = s.split('').sort(), i = 1

  for (; i < s.length; i++){
    if (arr[i] === arr[i - 1]){
      count+=2
      i++
    }
  }

  return i < s.length || count < s.length ? count+1 : count
};
// @lc code=end

