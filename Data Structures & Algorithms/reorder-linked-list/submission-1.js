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
     * @return {void}
     */
    reorderList(head) {
        let len = 0;
        let tmp = head;
        while (tmp) {
            len++
            tmp = tmp.next;
        }

        if (len < 2) return head;
        
        tmp = head;
        for (let i = 0; i < Math.floor(len / 2); i++) {
            tmp = tmp.next;
        }

        let rev = tmp.next;
        tmp.next = null;

        tmp = rev.next;
        rev.next = null;
        while (tmp) {
            const next = tmp.next;
            tmp.next = rev;
            rev = tmp;
            tmp = next;
        }

        while (rev) {
            const hnext = head.next;
            const rnext = rev.next;

            head.next = rev;
            rev.next = hnext;

            head = hnext;
            rev = rnext;
        }

    }
}
