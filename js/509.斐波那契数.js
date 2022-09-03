/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n < 2) return n
  
  // 1、使用循环解决
  // return loop(n)

  // 2、使用递归解决
  // return recursive(n)
  
  // 3、使用动态规划解决
  return dp(n)
};

let dp = n => {

  let arr = [0, 1]
  
  for (let i = 2; i <= n; i++){
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[n]
}

let loop = n => {
  let res = 0, ppre = 0, pre = 1

  for (let i = 2; i <= n; i++){
    res = ppre + pre
    ppre = pre
    pre = res
  }
  return res
}

let recursive = n => {
  return subRecursive(n, 0, 1, 2)
}

let subRecursive = (n, ppre, pre, i) => {
  if (i <= n){
    return subRecursive(n, pre, pre + ppre)
  }
  return pre + ppre
}
// @lc code=end

