/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let sum: string[] = []
  let i = a.length - 1, j = b.length - 1
  let rem = 0;

  for (; i >= 0 || j >= 0 || rem > 0; i--, j--){
    // 单数：push 1
    // 双数：push 0
    // 大于等于2个1：rem++
    let q = 0
    if (i >= 0 && j >= 0){
      q = rem + Number.parseInt(a[i]) + Number.parseInt(b[j])
    } else if (i >= 0){
      q = rem + Number.parseInt(a[i])
    } else if (j >= 0){
      q = rem + Number.parseInt(b[j])
    } else {
      q = rem
    }
    rem = 0
    if (q % 2 === 0){
      sum.push('0')
    } else {
      sum.push('1')
    }
    if (q > 1){ rem++ }
  }

  return sum.reverse().join("")
};
// @lc code=end

