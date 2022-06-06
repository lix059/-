// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

// function addTwoMumber(l1, l2) {
//     //TODO 校验参数
//     if (l1.length < 1 || l2.length < 1) {
//         throw new Error('param error');
//     }
//     const res = [];
//     const maxLen = l1.length > l2.length ? l1.length : l2.length;
//     let tmp = 0;
//     let sumTmp;
//     for (let i = 0; i < maxLen; i ++) {
//         sumTmp = (l1[i] || 0) + (l2[i] || 0) + tmp;
//         res.push(sumTmp % 10);
//         if (sumTmp >= 10) {
//             tmp = Math.floor(sumTmp / 10);
//         } else {
//             tmp = 0;
//         }
//     }
//     if (tmp > 0) {
//         res.push(tmp);
//     }
//     return res;
// }

// const l1 = [9,9,9,9,9,9,9];
// const l2 = [9,9,9,9];
// const test = addTwoMumber(l1, l2);

// console.log(test);



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let l1Head = l1;
    let l2Head = l2;
    let res = new ListNode();
    let resHead = res;
    let tmp = 0;
    let sumTmp;
    while (l1Head || l2Head) {
        console.log(l1Head?.val, l2Head?.val, tmp);
        sumTmp = (l1Head?.val || 0) + (l2Head?.val || 0) + tmp;
        if (sumTmp >= 10) {
            tmp = 1;
        } else {
            tmp = 0;
        }
        resHead.val = sumTmp % 10; 
        if (l1Head && (l1Head.next || l1Head.next === null)) l1Head = l1Head.next;
        if (l2Head && (l2Head.next || l2Head.next === null)) l2Head = l2Head.next;
        if (l1Head || l2Head) {
            // 是否有下一个
            resHead.next = new ListNode();
            resHead = resHead.next;
        }
    }
    if (tmp > 0) {
        resHead.next = new ListNode(1);
    }
    return res;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1 = l1.next;
l1.next = new ListNode(3);

let l2 = new ListNode(5);
l1.next = new ListNode(6);
l1 = l1.next;
l1.next = new ListNode(4);

const res = addTwoNumbers(l1, l2);
console.log(res);