
// hash表存储

/**
 * 
 * @param {ListNode} head 
 * @return {boolean}
 */
function hasCycle(head) {
  if (!head) {
    return false;
  }
  const map = new Map();
  map.set(head, 1);
  let nxt = head.next;
  while (nxt) {
    if (map.get(nxt)) return true;
    map.set(nxt, 1);
    nxt = nxt.next;
  }
  return false;
}