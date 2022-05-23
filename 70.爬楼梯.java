/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
    private Map<Integer, Integer> m = new HashMap<>();
    public int climbStairs(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        if (m.get(n) != null){
            return m.get(n)
        } else {
            int res = climbStairs(n - 1) + climbStairs(n - 2);
            m.put(n, res);
            return res;
        }
    }
}
// @lc code=end

