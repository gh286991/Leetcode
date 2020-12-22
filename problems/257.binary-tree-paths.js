/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res =[]

    const treePath = (node , path)=> {
        if(node){
            path = path ? `${path}->${node.val}`:`${node.val}`
            if(node.left || node.right){
                treePath(node.left, path)
                treePath(node.right, path)
            } else{
                res.push(path)
            }
        }
    }
    
    treePath(root, '')
    return res
};
// @lc code=end

