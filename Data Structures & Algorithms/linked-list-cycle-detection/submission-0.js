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
        let second = head;
        while (head && second) {
            head = head.next;
            second = second.next?.next;
            if (head === second) {
                return true;
            }
        }

        return false;
    }
}
