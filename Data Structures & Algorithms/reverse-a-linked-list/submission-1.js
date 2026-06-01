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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        return this.reverse(null, head);
    }

    reverse(nl, ol) {
        if (!ol) {
            return nl;
        }

        if (!nl) {
            nl = ol;
            ol = ol.next;
            nl.next = null;
            return this.reverse(nl, ol)
        }

        const next = ol.next;

        ol.next = nl;
        nl = ol;

        return this.reverse(nl, next);
    }
}
