/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  
  // 方法一：循环 + 双指针
  return mergeLoop(list1, list2)

  // 方法二：递归
  // return mergeRecursive(list1, list2)
};

let mergeLoop = function(list1, list2) {
  let head = null
  let tail = null

  while (list1 || list2) {
    let val = 0
    if (!list1) {
      val = list2.val
      list2 = list2.next
    } else if (!list2) {
      val = list1.val
      list1 = list1.next
    } else {
      if (list1.val > list2.val) {
        val = list2.val
        list2 = list2.next
      } else {
        val = list1.val
        list1 = list1.next
      }
    }
    if (!head) {
      head = tail = new ListNode(val)
    } else {
      tail.next = new ListNode(val)
      tail = tail.next
    }
  }

  return head
}

let mergeRecursive = function(l1, l2) {
  if (!l1) {
    l2.next = mergeRecursive(l1, l2.next)
    return l2
  }
  if (!l2) {
    l1.next = mergeRecursive(l1.next, l2)
    return list1
  }
  if (l1.val > l2.val) {
    l2.next = mergeRecursive(l1, l2.next)
    return l2
  }
  l1.next = mergeRecursive(l1.next, l2)
  return l1
}

// @lc code=end

