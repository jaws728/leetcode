/*
 * @lc app=leetcode.cn id=27 lang=java
 *
 * [27] 移除元素
 */

// @lc code=start
class Solution {
    public int removeElement(int[] nums, int val) {
        if (nums.length == 0) return 0;
        int i = 0, j = nums.length - 1;
        while (i < j) {
            if (nums[j] == val) {
                j--;
            } else {
                if (nums[i] == val) {
                    int temp = nums[j];
                    nums[j--] = nums[i];
                    nums[i++] = temp;
                } else {
                    i++;
                }
            }
        }
        return nums[i] == val ? i : i + 1;
    }
}
// @lc code=end

