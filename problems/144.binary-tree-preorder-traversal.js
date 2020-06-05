/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */

 //Rescusion
// const preorderTraversal = function (root) {
//   const preorder = (node) => {
//     if (node !== null) {
//       res.push(node.val);
//       preorder(node.left);
//       preorder(node.right);
//     }
//   };

//   const res = [];
//   preorder(root);
//   return res;
// };

const preorderTraversal = function (root) {
    if(!root) return []
    const stack = []
    const res =[]
    stack.push(root)
    
    while (stack.length > 0) {
        let node = stack.pop()
        res.push(node.val)
        console.log('start' , stack)
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left)
        }
    }

    return res;
    };

// @lc code=end
