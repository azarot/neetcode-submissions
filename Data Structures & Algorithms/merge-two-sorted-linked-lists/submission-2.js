/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 && list2) {
            let r;
            if (list1.val < list2.val) {
                r = list1;
                list1 = list1.next;
            } else {
                r = list2;
                list2 = list2.next;
            }
            r.next = null;
            merge(r, list1, list2);

            return r;
        } else if (list1) {
            return list1;
        } else if (list2) {
            return list2;
        } else {
            return null;
        }
    }
}

function merge(r, l1, l2) {
    if (l1 && l2) {
        if (l1.val < l2.val) {
            r.next = l1;
            merge(r.next, l1.next, l2);
        } else {
            r.next = l2
            merge(r.next, l1, l2.next);
        }
    } else if (l1) {
        r.next = l1;
    } else {
        r.next = l2;
    }
}
