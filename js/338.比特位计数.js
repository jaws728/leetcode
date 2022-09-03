/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  // 正常方式：使用loop的形式遍历一遍当下数的二进制 -> 不推荐
  // return useAnd(n)
  return useOddEven(n)
};

let useAnd = n => {
  // 效率方式一：使用x = X & (X-1)公式清除最后一位1可提高效率 -> 直到x=0则结束数
  let bits = [0]
  for (let i = 1; i < n + 1; i++){
    bits.push( bits[i&(i-1)] + 1 ) 
  }
  // 3 = 011
  // 4 = 100
  // & = 000 -> bits[0] = 0 -> 0+1=1 -> 4中有一个1
  return bits
}

let useOddEven = n => {
  let bits = [0]
  for(let i = 1; i < n + 1; i++){
    bits.push( (i&1===1) ? bits[i-1]+1 : bits[i>>1])
  }
  return bits
}

// @lc code=end
