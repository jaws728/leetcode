/*
 * @lc app=leetcode.cn id=704 lang=java
 *
 * [704] 二分查找
 */

// @lc code=start
class Solution {
    public int search(int[] nums, int target) {
        binarySearch(nums, target, 0, nums.length);
        
        return len;
    }

    public int binarySearch(int[] nums, int target, int start, int end){
        if (start != end){
            int left = binarySearch(nums,target, start, end/2);
            if (left !=)
            int right = binarySearch(nums,target, end/2, end);
        }
    }
}
// @lc code=end

