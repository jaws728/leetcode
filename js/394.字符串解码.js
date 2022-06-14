/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stk = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      if (!!parseInt(s[i])) { //isNumber
        stk.push(getNumber(s, i))
      } else {
        stk.push(s[i])
      }
    } else {
      let str = ''
      let ch = stk.pop()
      while (ch !== '[' && stk.length !== 0) {
        ch = stk.pop()
        if (ch === '[') {
          break
        }
        str += ch
      }
      for (let j = stk.pop(); j > 0; j--) {
        str += str
      }
      return str
      // stk.push(str)
    }
  }
  return stk.pop()
};

let getNumber = (s, i) => {
  let ans = ''
  while (!!parseInt(s[i])) {
    ans += s[i++]
  }
  return parseInt(ans)
}
// @lc code=end

