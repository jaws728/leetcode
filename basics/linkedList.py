#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ========== 链表反转 ==========

# 定义链表
class Node:
  def __init__(self, data, next = None):
    self.data = data
    self.next = next
  
  def printList(self):
    curr = self.data
    str = ""
    while (curr.next):
        str += curr.data + " "
        curr = curr.next
    print(str)

# 1、迭代iterattion：循环
def reverseLinkedList(list):
  # 存储：当下值、下一个值
  curr = list
  prev = None
  next = None
  # 只要链表当下值还有就一直循环
  while (curr) :
    # a -> b ==> a <- b
    next = curr.next # next = b.next
    curr.next = prev # b.next = a
    prev = curr # prev = b
    curr = next # curr = b.next
  return prev

# 2、递归recursive：调用自身
def reverseLinkedListRecursive(list):
  # 结束条件
  if (not list or not list.next):
    return list
  # 调用自身
  reverseLinkedListRecursive(list.next)
  # 当到最后一个节点，需要做出修改：往回指
  list.next.next = list # 4.next = 5 -> 5.next = 4, 4=curr ===> 5.next = 4
  list.next = None #4.next = null


# Testing
node5 = Node(5)
node4 = Node(4, node5)
node3 = Node(3, node4)
node2 = Node(2, node3)
node1 = Node(1, node2)
print('Linked List: ', node1)
node1.printList()

rList = reverseLinkedList(node1)
rrList = reverseLinkedListRecursive(node1)
print('Iteration reversed: ', rList)
print('Recursion reversed: ', rrList)
