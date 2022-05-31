/*
 * @lc app=leetcode.cn id=394 lang=java
 *
 * [394] 字符串解码
 */

// @lc code=start
class Solution {

    public String decodeString(String s) {
        Stack<String> stack = new Stack<String>();
        for (int i = 0; i < s.length(); i++) {
            if (!s[i].equals(']')) {
                stack.push(s[i]);
            } else {
                String ch = stack.pop();
                String letters = new String(ch);
                while (!stack.isEmpty()) {
                    ch = stack.pop();
                    if (!ch.equals('[')) {
                        letters += ch;
                    } else {
                        break;
                    }
                }
                int j = stack.pop();
                String ans = new String();
                for (;j > 0; j--) {
                    ans.append(letters);
                }
                stack.push(ans);
            }
        }
        return ans;
    }
}
// @lc code=end

