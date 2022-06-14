/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let n = nums.length
  // 将数组中的元素看成索引 = nums[i] - 1
  // 并将有此索引的数字做一个标记：标记过的数字则出现过
  for (let i = 0; i < n; i++){
    let j = (nums[i] - 1) % n
    nums[j] += n
  }
  let res = []
  for (let i = 0, j = 0; i < n; i++) {
    if (nums[i] <= n) {
      res[j++] = i + 1
    }
  }
  return res
};
// @lc code=end

