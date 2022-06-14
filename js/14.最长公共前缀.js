/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //substring
  let res = ''
  // let min = strs.reduce((a, b) => {return a.length <= b.length ? a : b})
  // for (let i = 0; i<strs.length; i++){
  //   if (min === strs[i]) continue
  //   let k = 0
  //   for (let j = 1; j<min.length; j++){
  //     let temp = strs[i][j].slice(k, j)
  //     if (min.search(temp) !== -1){
  //       k++
  //       j = k + 1
  //       console.log(min, temp)
  //     }
  //   }
  // }

  if (strs.length === 0) return ""
  s1 = Math.min(strs)
  s2 = Math.max(strs)

  for(let i = 0; i < s1.length; i++){
      if (s1[i] != s2[i])
          return s2.slice(0,i)
  }
  return s1

};
// @lc code=end
let strs = ["flower","flow","flight"]
let lcp = longestCommonPrefix(strs)
console.log(lcp)

let fn = function(str1, str2) {
  let arr = []
  let signals = []

  for (let i = 0; i < str1.length; i++){
    for (let j = 0; i < str2.length; j++){
      if (i === 0 || j === 0) {
        arr[i][j].push(0)
        continue
      }
      if (str1[i] === str2[j]){
        arr[i][j].push(arr[i-1][j-1] + 1)
        signals[i][j].push(1)
      }
    }
  }
}