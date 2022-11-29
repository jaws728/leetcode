/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  
  const map = new Map();
  for (let c of s){
    map.set(c, (~~map.get(c) + 1))
  }

  for (let c of t){
    if (map.has(c)){
      let tmp = map.get(c) - 1
      if (tmp === 0) map.delete(c)
      else map.set(c, tmp)
    } else {
      return false
    }
  }

  return map.size === 0
};
// @lc code=end

