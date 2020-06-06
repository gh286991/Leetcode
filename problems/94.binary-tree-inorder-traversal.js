/* eslint-disable func-names */
/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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

// eslint-disable-next-line no-unused-vars
const inorderTraversal = (root) => {
  const res = [];
  const inOrder = (node) => {
    if (node !== null) {
      inOrder(node.left);
      res.push(node.val);
      inOrder(node.right);
    }
  };
  inOrder(root, res);
  return res;
};
// @lc code=end
