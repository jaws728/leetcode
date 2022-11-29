/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null
  if (head.next === null) return head

  // 方法一
  // let len = 0
  // let cur = head;
  // while(cur.next){
  //   cur = cur.next
  //   len++
  // }
  // if (++len % 2 === 0){
  //   // 返回中间节点的下一个
  //   len++
  // }
  // len = Math.round(len/2) - 1
  // // 返回中间节点
  // while (len > 0){
  //   head = head.next
  //   len--
  // }
  // return head

  // 方法二：快慢指针
  let fast = head, slow = head
  while (fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }
  return slow
};
// @lc code=end

