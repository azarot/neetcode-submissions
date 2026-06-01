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
     * @return {boolean}
     */
    isValidBST(root) {
        const list = [];
        toList(root, list);
        // console.log(list)
        for (let i = 1; i < list.length; i++) {
            if (list[i - 1] >= list[i]) return false;
        }

        return true;
    }
}

function toList(root, res) {
    if (!root) return;

    toList(root.left, res);
    res.push(root.val);
    toList(root.right, res);
}
