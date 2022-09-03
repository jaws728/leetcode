/* ========== 链表反转 ========== */

// 定义链表
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
  printList(){
    var curr = this.data;
    var str = "";
    while (curr.next) {
        str += curr.data + " ";
        curr = curr.next;
    }
    console.log(str);
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head
    this.size = 0
  }

  add(element) {
    var node = new Node(element);
    var current;
    if (this.head == null)
      this.head = node;
    else {
      current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printList(){
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
  }
}

// 1、迭代iterattion：循环
function reverseLinkedList(list) {
  // 存储：当下值、下一个值
  let curr = list
  let prev = null, next = null
  // 只要链表当下值还有就一直循环
  while (curr) {
    // a -> b ==> a <- b
    next = curr.next // next = b.next
    curr.next = prev // b.next = a
    prev = curr // prev = b
    curr = next // curr = b.next
  }
  return prev
}

// 2、递归recursive：调用自身
function reverseLinkedListRecursive(list) {
  // 结束条件
  if (!list || !list.next){
    return list
  }
  // 调用自身
  reverseLinkedListRecursive(list.next)
  // 当到最后一个节点，需要做出修改：往回指
  list.next.next = list // 4.next = 5 -> 5.next = 4, 4=curr ===> 5.next = 4
  list.next = null //4.next = null
}

// Testing
let node5 = new Node(5)
let node4 = new Node(4, node5)
let node3 = new Node(3, node4)
let node2 = new Node(2, node3)
let node1 = new Node(1, node2)
console.log('Linked List: ' + node1)

let rList = reverseLinkedList(node1)
let rrList = reverseLinkedListRecursive(node1)
console.log('Iteration reversed: ' + rList)
console.log('Recursion reversed: ' + rrList)
