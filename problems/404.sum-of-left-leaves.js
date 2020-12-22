/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0

    const levelOrder = (node , isLeft= false) => {
        if(node){
            
            if (isLeft && !node.left && !node.right){
                return sum = sum + node.val
            }
            levelOrder(node.left,true)
            levelOrder(node.right,false)
        }
    }

    levelOrder(root)
    return sum
};
// @lc code=end

