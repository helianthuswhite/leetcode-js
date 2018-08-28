/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, extra) => {
    const val = extra ? l1.val + l2.val + extra : l1.val + l2.val;
    const l3 = new ListNode(val);
    l3.val = val > 9 ? val % 10 : val;
    extra = val > 9 ? Math.floor(val / 10) : 0;
    if (l1.next) {
        l2.next || (l2.next = new ListNode(0));
    }
    else {
        if (l2.next) {
            l1.next = new ListNode(0);
        }
        else {
            if (extra) {
                l1.next = new ListNode(0);
                l2.next = new ListNode(0);
            }
        }
    }
    if (l1.next && l2.next) {
        l3.next = addTwoNumbers(l1.next, l2.next, extra);   
    }
    return l3;
};