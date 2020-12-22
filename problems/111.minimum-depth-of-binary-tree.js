/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0

    const leftMinDepth = minDepth(root.left)
    const rightMinDepth = minDepth(root.right)

    if(leftMinDepth === 0 && rightMinDepth === 0){
        return 1
    } 
    else if(leftMinDepth === 0){
        return rightMinDepth +1
    }
    else if(rightMinDepth === 0){
        return leftMinDepth +1
    }
    else return Math.min( leftMinDepth , rightMinDepth) +1
};
// @lc code=end

