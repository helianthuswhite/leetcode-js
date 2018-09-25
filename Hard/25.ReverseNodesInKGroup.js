/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const reverseKGroup = (head, k) => {

    if (!head || !head.next) {
        return head;
    }

    const divide = (h, r) => {
        const temp = h;
        let i = 1;

        while (i < k && h.next) {
            i++;
            h = h.next;
        }

        if (i !== k) {
            r.next = temp;
            return;
        }

        const last = h.next;
        h.next = null;
        r.next = reverse(temp);

        while (r.next) {
            r = r.next;
        }
        last && divide(last, r);
    };

    const reverse = h => {
        let temp = {};
        const r = temp;

        while (h && h.next) {
            h.next.pre = h;
            h = h.next;
        }

        while (h) {
            temp.next = h;
            if (!h.pre) {
                h.next = null;
                break;
            }
            h = h.pre;
            temp = temp.next;
        }
        
        return r.next;
    };

    
    const temp = {};
    const result = temp;
    divide(head, temp);
    return result.next;
};
