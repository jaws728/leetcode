/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  //return recursive(n, new Map())
  return loop(n)
};

// 递归解法：从上到下，二叉树
var recursive = function(n, m) {
  if (n === 1) return 1
  if (n === 2) return 2
  if (m.has(n)) return m.get(n)
  res = recursive(n-1, m) + recursive(n-2, m)
  m.set(n, res)
  return res
}

//循环解法：自底向上累加
var loop = function(n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let res = 0
  let prePre = 1
  let pre = 2
  for (let i = 3; i < n; i++) {
    res = pre + prePre
    prePre = pre
    pre = res
  }
  return res
}

// @lc code=end