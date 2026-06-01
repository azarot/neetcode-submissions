/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = [];

        fillList(root, k, res);

        return res[k - 1];
    }
}


function fillList(root, k, res) {
    if (!root || res.lenght === k) return;

    fillList(root.left, k, res);
    res.push(root.val);
    fillList(root.right, k, res);
}