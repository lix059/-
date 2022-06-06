

// 插入排序 时间复杂度 O(n^2) 
// 快速 排序需要随机读，不适合链表排序

// 归并排序比较合适，

// 归并排序基于分治算法。最容易想到的实现方式是自顶向下的递归实现，考虑到递归调用的栈空间，自顶向下归并排序的空间复杂度是 O(log n) 时间复杂度O(nlogn)。如果要达到 O(1)O(1) 的空间复杂度，则需要使用自底向上的实现方式。


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const toSortList = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  const mid = findCenter(head);
  const res = merge(toSortList(head), toSortList(mid));
  return res;
}

const merge = (head1, head2) => {
  let start = new ListNode(0);
  let tmp1 = head1;
  let tmp2 = head2;
  let tmp = start;
  while (tmp1 !== null && tmp2 !== null) {
    if (tmp1.val >= tmp2.val) {
      tmp.next = tmp2;
      tmp2 = tmp2.next;
    } else {
      tmp.next = tmp1;
      tmp1 = tmp1.next;
    }
    tmp = tmp.next;
  }
  if (tmp1 !== null) {
    tmp.next = tmp1;
  } else if (tmp2 !== null) {
    tmp.next = tmp2;
  }
  return start.next;
}

const findCenter = (head) => {
  let oneStep = head;
  let twoStep = head;
  while (twoStep.next && twoStep.next.next) {
    twoStep = twoStep.next.next;
    oneStep = oneStep.next;
  }
  const mid = oneStep.next;
  oneStep.next = null;
  return mid;
}



let l1 = new ListNode(3);
l1.next = new ListNode(2);
l1.next.next = new ListNode(1);
console.log(toSortList(l1));