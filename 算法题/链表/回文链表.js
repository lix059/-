/**
// 回文链表
* Definition for singly-linked list.
* function ListNode(val, next) {
*   this.val = (val === undefined ? 0 : val)
*   this.next = (next === undefined ? null : next)
* }
*/

// 判断是否是回文表

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 方案一
// 遍历链表复制到数组中，双指针遍历
// 时间复杂度 O(n) 
// 空间复杂度 O(n)

// 方案二
// 递归
/**
 * 
 * @param {ListNode} head 
 * @return {Boolean}
 */
function isPalindrome(head) {
  let left = head;
  function traverse(right) {
    if (right === null) return true;
    let res = traverse(right.next);
    res = res && (left.val === right.val);
    left = left.next;
    return res;
  }
  return traverse(head);
}
// 时间复杂度 O(n)
// 空间复杂度 O(n)


let l1 = newListNode(2);
l1.next = newListNode(4);
l1 = l1.next;
l1.next = newListNode(3);
let l2 = newListNode(1);
l1.next = newListNode(2);
l1 = l1.next;
l1.next = newListNode(1);
console.log(isPalindrome(l1));
console.log(isPalindrome(l2));


// 反转后半部分
// 方案三
function reverseList2(head) {
  const center = findCenter(head);
  let reverseStart = reverseList(center);
  while (head.val === reverseStart.val && head !== reverseStart && head.next && reverseStart.next) {
    head = head.next;
    reverseStart = reverseStart.next;
  }
  if (head === reverseStart || (reverseStart.next === null && head.val === reverseStart.val)) return true;
  return false;
}



// 快慢指针找到中间位置
// 注意奇偶数情况
function findCenter(head) {
  let oneStep = head;
  let twoStep = head;
  while (twoStep.next && twoStep.next.next) {
    twoStep = twoStep.next.next;
    oneStep = oneStep.next;
  }
  if (twoStep.next) oneStep = oneStep.next;
  return oneStep;
}


// 反转链表
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


// 时间复杂度 O(n) 
// 空间复杂度 O(1)