/*
 * @lc app=leetcode.cn id=206 lang=java
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    // 迭代
    // public ListNode reverseList(ListNode head) {
    //     ListNode pre = null;
    //     ListNode next, curr = head;

    //     while(curr != null){
    //         next = curr.next;
    //         curr.next = pre;
    //         pre = curr;
    //         curr = next;
    //     }
    //     return pre;
    // }

    // 递归
    public ListNode reverseList(ListNode head){
        // 边缘条件判断
        if(head == null) return null;
        if (head.next == null) return head;
        
        return recursive(head);
    }

    public ListNode recursive(ListNode head){
        // 先找到最后一个元素
        if (head.next == null || head == null){
            return head;
        }
        // 从头递归至最后
        ListNode newHead = recursive(head.next);
        // 从后往前依次递归反转
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
// @lc code=end

