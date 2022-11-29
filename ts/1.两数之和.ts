/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // 1. 暴力枚举
  // for (let i = 0; i < nums.length - 1; i++){
  //   for (let j = i + 1; j < nums.length; j++){
  //     if (nums[i] + nums[j] === target){
  //       return [i, j]
  //     }
  //   }
  // }

  // 2. 哈希表
  let map = new Map(); // key = target - nums[i], v = i
  for (let i = 0; i < nums.length; i++){
    let temp = target - nums[i]
    if (map.has(temp)){
      return [i, map.get(temp)]
    } else {
      map.set(nums[i], i)
    }
  }

  return [];
};
// @lc code=end

