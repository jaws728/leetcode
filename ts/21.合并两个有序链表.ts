/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let prehead = new ListNode(-1, null);
  let pre = prehead;
  while (list1 && list2){
    if (list1.val > list2.val){
      pre.next = list2;
      list2 = list2.next;
    } else if (list1.val <= list2.val){
      pre.next = list1;
      list1 = list1.next;
    }
    pre = pre.next;
  }
  pre.next = list1 === null ? list2 : list1;
  return prehead.next;
};
// @lc code=end

