/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const swapPairs = head => {
    if (head && head.next) {
        let tmp = head;
        head = head.next;
        tmp.next = head.next;
        head.next = tmp;
        if (tmp.next) {
            tmp.next = swapPairs(tmp.next);
        }
    }
    return head;
};
