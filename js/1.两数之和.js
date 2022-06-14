/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  let res = [] // index
  let m = new Map()
  for(let i = 0; i < nums.length; i++) {
    let rest = target - nums[i]
    if (m.has(rest)) {
      res[0] = m.get(rest)
      res[1] = nums[i]
      break;
    }
    m.set(nums[i], i)
  }
  return res;
}
// @lc code=end
