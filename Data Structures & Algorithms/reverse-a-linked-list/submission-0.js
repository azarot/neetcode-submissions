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
        let res = null;
    
        while (head) {
            const next = head.next;

            if (res === null) {
                res = head;
                head = head.next;
                res.next = null;
            } else {
                head.next = res;
                res = head;
                head = next ? next : null;
            }
        }

        return res;
    }
}
