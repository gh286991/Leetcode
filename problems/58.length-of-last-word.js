/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  if (s.length === 0) {
    return 0;
  }
  const Words = s.split(' ');

  const resArray = Words.map((word) => word.length);
  const res = resArray[resArray.length - 1];

  if (res === 0) {
    const fil = resArray.filter((val) => val !== 0);
    if (fil.length === 0) {
      return 0;
    }
    return fil[fil.length - 1];
  }SW;

  return res;
};
// @lc code=end

const input = ' ';
console.log(lengthOfLastWord(input));
