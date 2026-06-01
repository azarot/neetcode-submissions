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

        getList(root, k, res);

        return res[k - 1];
    }
}

function getList(root, k, res) {
    if (!root || res.length >= k) return;

    getList(root.left, k, res);
    
    if (res.length >= k) return;
    res.push(root.val);
    getList(root.right, k, res);
}