/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  // 方法1：使用set（无重复数组）
  let set = new Set(nums)
  if (set.size !== nums.length){
    return true
  }

  // 方法2：变量并进行比较
  nums.sort()
  for (let i = 1; i < nums.length; i++){
    if (nums[i-1] === nums[i]){
      return true
    }
  }
  return false
};
// @lc code=end

