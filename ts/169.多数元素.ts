/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  // hash
  // let m = new Map(), res = 0
  // for (let n of nums){
  //   if (!m.has(n)){
  //     m.set(n, 1)
  //   } else {
  //     let tmp = m.get(n) + 1
  //     m.set(n, tmp)
  //   }
  //   if (m.get(n) > nums.length/2){
  //     res = n
  //     break
  //   }
  // }

  //摩尔投票法
  let cnt = 0, res = 0
  for (let n of nums){
    if (cnt === 0){
      cnt++
      res = n
    } else {
      if (res === n){
        cnt++
      } else {
        cnt--
      }
    }
  }

  return res
};
// @lc code=end

