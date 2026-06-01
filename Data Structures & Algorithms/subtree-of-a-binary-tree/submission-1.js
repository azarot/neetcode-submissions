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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!(root && subRoot)) return false;
        if (check(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) 
            || this.isSubtree(root.right, subRoot);
    }
}

function check(root, sub) {
    if (!root && !sub) return true;
    if (!(root && sub && root.val === sub.val)) return false;

    return check(root.left, sub.left) && check(root.right, sub.right);
}