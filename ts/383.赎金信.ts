/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false

  let map = new Map()
  for (let c of magazine){
    if(map.has(c)){
      let tmp = map.get(c)
      map.set(c, tmp+1)
    } else {
      map.set(c, 1)
    }
  }

  for (let c of ransomNote){
    if (map.has(c)){
      let tmp = map.get(c)
      if (tmp === 1) map.delete(c)
      else map.set(c, tmp - 1)
    } else {
      return false
    }
  }

  return true
};
// @lc code=end

