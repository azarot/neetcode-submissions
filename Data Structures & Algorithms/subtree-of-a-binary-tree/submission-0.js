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
        if (root && subRoot) {
            return check(root, subRoot) || this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
        } else if (!root && !subRoot) {
            return true;
        } else {
            return false;
        }
    }
}

function check(root, sub) {
    if (!sub && !root) return true;

    if (!(sub && root && sub.val === root.val)) return false;

    return check(root.left, sub.left) && check(root.right, sub.right);
}
 