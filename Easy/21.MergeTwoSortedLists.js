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

const mergeTwoLists = (l1, l2) => {
    let l3 = {
        next: null
    };
    head = l3;
    
    while (l1) {
        while (l2) {
            if (l1.val < l2.val) {
                l3.next = l1;
                l3 = l3.next;
                l1 = l1.next;
                if (!l1) {
                    break;
                }
            }
            else {
                l3.next = l2;
                l3 = l3.next;
                l2 = l2.next;
            }
        }

        if (!l2 || !l1) {
            break;
        }
    }

    l3.next = l1 || l2;

    return head.next;
};
