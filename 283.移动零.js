/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length == 0) return
  // i为非零指针
  // j为零指针
  let j = 0
  // for (; j < nums.length; j++) {
  //   if (nums[j] == 0)
  //     break;
  // }
  for (let i = j; i < nums.length; i++) {
    if (nums[i] != 0){
      nums[j++] = nums[i]
    }
  }
  for (;j < nums.length; j++) {
    nums[j] = 0
  }
};
// @lc code=end

