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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = []

        go(root, res, 0);

        return res;
    }
}


function go(root, res, level) {
    if (!root) return;

    if (level === res.length) {
        res.push([]);
    }

    res[level].push(root.val);
    go(root.left, res, level + 1);
    go(root.right, res, level + 1);
}
