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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) return null;

        if (p.val > q.val) {
            const tmp = q;
            q = p;
            p = tmp;
        }

        if (p.val <= root.val && root.val <= q.val) return root;

        return this.lowestCommonAncestor(root.left, p, q) 
            || this.lowestCommonAncestor(root.right, p, q);
    }
}
