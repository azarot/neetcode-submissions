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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (!lists || !lists.length) return null;
        if (lists.length === 1) return lists[0];

        console.log(lists.length, Math.ceil(lists.length / 2))
        let l1 = this.mergeKLists(lists.splice(0, Math.ceil(lists.length / 2)));
        let l2 = this.mergeKLists(lists);

        let res, tail;

        if (l1.val < l2.val) {
            res = tail = l1;
            l1 = l1.next;
        } else {
            res = tail = l2;
            l2 = l2.next;
        }

        while (l1 || l2) {
            if (l1 && l2) {
                if (l1.val < l2.val) {
                    tail.next = l1;
                    l1 = l1.next;
                } else {
                    tail.next = l2;
                    l2 = l2.next;
                }
                tail = tail.next;
            } else if (l1) {
                tail.next = l1;
                break;
            } else {
                tail.next = l2;
                break;
            }
        }

        return res;
    }
}
