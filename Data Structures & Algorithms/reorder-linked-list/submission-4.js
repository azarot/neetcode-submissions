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
        let count = 0;
        
        let tmp = head;
        while (tmp) {
            tmp = tmp.next;
            count++;
        }
        if (count <= 2) return head;

        tmp = head;
        for (let i = Math.floor(count / 2) - 1; i >= 0; i--) {
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

        tmp = head;

        while (tmp && rev) {
            const next1 = tmp.next;
            const next2 = rev.next;

            tmp.next = rev;
            rev.next = next1;

            tmp = next1;
            rev = next2;
        }

        return head;
    }
}
