/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null) return null

  let slowPtr = head, fastPtr = head
  let existLoop = false
  while (fastPtr.next && fastPtr.next.next) {
    slowPtr = slowPtr.next
    fastPtr = fastPtr.next.next
    if (slowPtr === fastPtr) {
      existLoop = true
      break
    }
  }

  if (existLoop) {
    slowPtr = head
    while (slowPtr != fastPtr) {
      slowPtr = slowPtr.next
      fastPtr = fastPtr.next
    }
    return slowPtr
  }

  return null
};
// @lc code=end

