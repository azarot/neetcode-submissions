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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let tmp = head;
        let len = 0
        while (tmp) {
            len++;
            tmp = tmp.next;
        }

        if (n === len) return head.next;

        tmp = head;
        for (let i = 0; i < len - n - 1; i++) {
            tmp = tmp.next;
        }
        tmp.next = tmp.next.next;

        return head;
    }
}
