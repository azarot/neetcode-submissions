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
        if (!root) return [];
    
        const stack = [];
        const res = [];

        stack.push({item: root, level: 0});

        while (stack.length > 0) {
            const {item, level } = stack.pop()
            if (res.length <= level) {
                res.push([item.val])
            } else {
                res[level].push(item.val);
            }

            if (item.right) {
                stack.push({item: item.right, level: level + 1});
            }

            if (item.left) {
                stack.push({item: item.left, level: level + 1});
            }

        }


        return res;
    }
}


