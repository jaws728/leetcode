/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  return recursive(head)
  

  // let curr = head
  // while (curr.next) {
  //   if (curr.val === curr.next.val) {
  //     curr.next = curr.next.next
  //   } else {
  //     curr = curr.next
  //   }
  // }

  // return head
};

function recursive(head) {
  if (head === null || head.next === null) return head
  head.next = recursive(head.next)
  return head.val === head.next.val ? head.next : head
}

// @lc code=end

