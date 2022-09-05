/**
 * TODO: X的平方根
 *       * 在不使用sqrt函数的情况下，得到平方根的整数
 * ! 重点：二分法、牛顿迭代
 */

// 二分查找
let binarySearch = n => {
  let i = -1
  let left = 0, right = n

  while (left <= right) {
    let mid = Math.round(left + (right - left)/2)
    if (mid * mid <= n){
      i = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return i
}

console.log(binarySearch(24))


/**
 * 牛顿迭代：这里用到了微积分中的n^2运用到graph中
 * 原理：已知 n/a = b
 *      循环出a和b时可以找到，每次a与b的均值都是无限接近n的平方，因此可以一直迭代直到找到符合 n/a = a 的 a值
 * @param {*} n 
 */
let newton = n => {
  if (n === 0) return 0
  return calc(n, n)
}
let calc = (a, n) => {
  let mid = Math.floor((a + n/a)/2)
  if (mid === a) return mid
  else return calc(mid,n)
}

console.log(newton(25))