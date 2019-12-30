/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  } if (strs.length === 1) {
    return strs[0];
  }

  const strList = strs.sort((a, b) => (a.length - b.length));

  if (strList[0].length == 0) {
    return '';
  }

  for (let i = 0; i < strList[0].length; i++) {
    const apha = strList[0][i];

    for (let j = 1; j < strList.length; j++) {
      if (apha != strList[j][i]) {
        return strList[0].slice(0, i);
      }
    }
  }
  return strList[0];
};
// @lc code=end
const input = ['flower', 'flow', 'flight'];

const ans = longestCommonPrefix(input);
console.log('ans', ans);
