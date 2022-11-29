/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  if (nums.length < 1) return -1
  let left = 0, right = nums.length - 1

  while (left <= right){
    let middle = Math.round((right - left) >> 1) + left
    if (nums[middle] < target){
      left = middle + 1
    } else if (nums[middle] > target){
      right = middle - 1
    } else {
      return middle
    }
  }
  return -1
};
// @lc code=end

