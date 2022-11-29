/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 0, right = n
        while(left < right){
            let mid = left + Math.floor((right - left) / 2)
            if (isBadVersion(mid)){
                right = mid // [left, mid]
            } else {
                left = mid + 1 // [mid, right]
            }
        }
        return left
    };
};
// @lc code=end

