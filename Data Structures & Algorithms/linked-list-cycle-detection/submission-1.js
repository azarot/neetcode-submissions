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
    hasCycle(h1) {
        let h2 = h1.next;

        while (h1 && h2) {
            if (h1 === h2) {
                return true;
            }
            h1 = h1.next;
            h2 = h2.next?.next;
        }

        return false;
    }
}
