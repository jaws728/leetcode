/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // Floryd双指针：快慢指针 - 移动1 和 移动2
  if (head === null) return false
  let slowPtr = head, fastPtr = head
  while (fastPtr.next && fastPtr.next.next) {
    slowPtr = slowPtr.next
    fastPtr = fastPtr.next.next
    if (slowPtr === fastPtr) {
      return true
    }
  }
  return false
};
// @lc code=end

