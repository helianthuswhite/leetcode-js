/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
    let list = {
        length: 0,
        next: head
    };
    let preNode = head;
    let i = 1;

    while (list.next) {
        list.length ++;
        list.next = list.next.next;
    }

    while (i < list.length - n) {
        i ++;
        preNode = preNode.next;
    }

    if (list.length === n) {
        head = head.next;
    }
    else {
        preNode.next = preNode.next.next;
    }

    return head;
};
