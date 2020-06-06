/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
const postorderTraversal = (root) => {
  const res = [];

  const postorder = (node) => {
    if (node !== null) {
      postorder(node.left);
      postorder(node.right);
      res.push(node.val);
    }
  };

  postorder(root);
  return res;
};
// @lc code=end
