

// 相交链表

// hash 判断

/**
 * 
 * @param {ListNode} head1 
 * @param {ListNode} head2 
 * @return {ListNode}
 */
const getIntersectionNode = (head1, head2) => {
  const map = new Map();
  while (head1) {
    map.set(head1, 1);
    head1 = head1.next;
  }
  while (head2) {
    if (map.get(head2)) return head2;
    head2 = head2.next;
  }
  return null;
}

// 时间复杂度 O(m + n), 空间复杂度 O(n)



/**
 * 
 * @param {ListNode} head1 
 * @param {ListNode} head2 
 * @return {ListNode}
 */
const getIntersectionNode2 = (headA, headB) => {
  let h1 = headA;
  let h2 = headB;
  let resetH1 = false;
  let resetH2 = false;
  while (h1 !== h2) {
    h1 = h1.next;
    h2 = h2.next;
    if (!resetH1 && h1 === null) {
      h1 = headB;
      resetH1 = true;
    }
    if (!resetH2 && h2 === null) {
      h2 = headA;
      resetH2 = true;
    }
  }
  if (h1 === h2) {
    return h1;
  }
  return null;
}

// 时间复杂度 O(m + n) 空间复杂度 O(1)

let l1 = new ListNode(3);
let l2 = new ListNode(2);

console.log(getIntersectionNode2(l1, l2));

