/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const treeTrevel = (node)=>{
        if(!node) return
        if(node ){
            const tempNode = node.left
            node.left = node.right
            node.right = tempNode
            treeTrevel(node.left)
            treeTrevel(node.right)
        }
    }

    treeTrevel(root)
    return root
};
// @lc code=end

