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
        if (!list1 && !list2) {
            return null;
        } else if (list1 && !list2) {
            return list1;
        } else if (!list1 && list2) {
            return list2;
        }

        let head, tail;
        if (list1.val < list2.val) {
            head = tail = list1;
            list1 = list1.next;
        } else {
            head = tail = list2;
            list2 = list2.next;
        }

        while (list1 || list2) {
            if (list1 && list2) {
                if (list1.val < list2.val) {
                    tail.next = list1;
                    list1 = list1.next;
                } else {
                    tail.next = list2;
                    list2 = list2.next;
                }
                tail = tail.next;
            } else if (list1) {
                tail.next = list1;
                break;
            } else {
                tail.next = list2;
                break;
            }
        }


        return head;
    }
}
