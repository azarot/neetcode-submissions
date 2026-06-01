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
        let l = lists;
        while (l.length > 1) {
            let r = [];
            for (let i = 0; i < l.length; i += 2) {
                if (i + 1 === l.length) {
                    r.push(l[i])
                } else {
                    r.push(mergeLists(l[i], l[i + 1]))
                }
            }
            l = r;
        }

        return l.length ? l[0] : null;
    }
}

function mergeLists(l1, l2) {
    let h, t;
    if (l1.val < l2.val) {
        h = t = l1;
        l1 = l1.next;
    } else {
        h = t = l2;
        l2 = l2.next;
    }

    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                t.next = l1;
                l1 = l1.next;
            } else {
                t.next = l2;
                l2 = l2.next;
            }

            t = t.next;
        } else if (l1) {
            t.next = l1;
            break;
        } else {
            t.next = l2;
            break;
        }
    }

    return h;
}
