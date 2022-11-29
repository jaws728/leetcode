/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) return nums.length
  
  // 1. SET
  // let set = new Set(nums)
  // nums.length = 0
  // nums.push(...set)

  // 2. 双指针
  let k = 0
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > nums[k]){
      nums[++k] = nums[i]
    }
  }


  return k+1;
};
// @lc code=end
