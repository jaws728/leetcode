/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 方法一：将nums2塞进nums1之后再次排序
  // nums1.splice(m, n, ...nums2)
  // nums1.sort((a,b) => a - b)
  
  // 方法二：使用双指针 - 顺序处理
  // nums1.splice(0, m + n, ...merge1(nums1, m, nums2, n))

  // 方法三：双指针反向处理
  merge2(nums1, m, nums2, n)
};

let merge1 = function(nums1, m, nums2, n) {
  let res = []
  for (let i = 0, i1 = 0, i2 = 0; i < m + n; i++) {
    if (i1 >= m) {
      // n1已取完
      res[i] = nums2[i2++]
    } else if (i2 >= n){
      // n2已取完
      res[i] = nums1[i1++]
    } else if (nums1[i1] > nums2[i2]) {
      res[i] = nums2[i2++]
    } else {
      res[i] = nums1[i1++]
    }
  }
  return res
}

let merge2 = function (n1, m, n2, n) {
  for (let i = m + n - 1, j1 = m - 1, j2 = n - 1; i >= 0; i--) {
    if (j1 < 0) {
      n1[i] = n2[j2--]
    } else if (j2 < 0) {
      n1[i] = n1[j1--]
    } else if (n1[j1] > n2[j2]) {
      n1[i] = n1[j1--]
    } else {
      n1[i] = n2[j2--]
    }
  }
}

// @lc code=end