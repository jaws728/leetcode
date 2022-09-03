/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // return loop(nums, target)
  return recursive(nums, target)
};

let loop = (nums, target) => {
  let start = 0, end = nums.length - 1;

  while(start <= end){
    let mid = Math.floor((start+end)/2)

    if (nums[mid] < target){
      start = mid + 1
    } else if (nums[mid] > target){
      end = mid - 1
    } else {
      return mid
    }
  }

  return -1;
}

let recursive = (nums, target) => {
  searchNum(nums, 0, nums.length - 1, target)
}

let searchNum = (arr, start, end, key) => {
  let mid = Math.floor((start - end)/2)

  if (start <= end){
    if (key < arr[mid]){
      searchNum(arr, start, mid - 1, key)
    } else if (key > arr[mid]){
      searchNum(arr, mid + 1, end,key)
    } else {
      return mid
    }
  } else {
    return -1
  }
}

// @lc code=end

