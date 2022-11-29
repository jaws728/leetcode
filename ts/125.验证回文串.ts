/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let str = s.toLowerCase().trim().replace(/[^a-z0-9]/g, '')
  if (str !== null) {
    for(let i = 0, j = str.length - 1; i < j; i++, j--){
      // if (i === j) break
      if (str.charAt(i) !== str.charAt(j)){
        return false
      }
    }
  }
  return true;
};
// @lc code=end

