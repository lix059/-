

// 无复杂算法

// 链表反转， + 重置点后节点的next


function reverseList(head) {
  let prev = null;
  let cur = head;
  let nxt;
  while (cur) {
    nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}