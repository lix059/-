

function reverseList(head) {
    let prev = null;
    let cur = head;
    let nxt = head;
    while (cur) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    return prev;
}

function ListNode(val,next) {
    this.val =(val===undefined ? 0 : val)
    this.next =(next===undefined? null : next)
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

console.log(reverseList(l1));