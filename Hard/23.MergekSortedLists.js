/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = lists => {
    let head = lists[0];
    let last = null;
    
    //  find the first not null as head
    for (let i = 0; i < lists.length; i ++) {
        if (lists[i]) {
            head = lists[i];
            break;
        }
    }
    
    //  chain all lists
    for (let i = 0; i < lists.length; i ++) {
        if (last && lists[i]) {
            lists[i].pre = last;
            last.next = lists[i];
        }
        while (lists[i] && lists[i].next) {
            lists[i].next.pre = lists[i];
            lists[i] = lists[i].next;
        }
        lists[i] && (last = lists[i]);
    }
    
    if (!head) {
        return null;
    }

    //  sort the list
    let tmp = {};
    let result = tmp;
    while (head) {
        let min = head;
        let list = head.next;
        while (list) {
            if (list.val < min.val) {
                min = list;
            }
            list = list.next;
        }
        if (min.pre) {
            min.pre.next = min.next;
            min.next && (min.next.pre = min.pre);
        }
        else {
            head = head.next;
            head && (head.pre = null);
        }
        tmp.next = min;
        tmp = tmp.next;
    }

    return result.next;
};
