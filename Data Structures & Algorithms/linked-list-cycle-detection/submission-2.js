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
     * @return {boolean}
     */
    hasCycle(head) {
        let faster = head.next;
        while (head && faster) {
            if (head === faster) return true;
            head = head.next;
            faster = faster.next?.next;
        }

        return false;
    }
}
