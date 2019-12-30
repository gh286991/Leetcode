/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const prev = table[s[i - 1]];
    let curr = table[s[i]];

    if (prev < curr) {
      curr -= prev * 2;
    }

    res += curr;
  }
  return res;
};
// @lc code=end
const s = 'MCMXCIV';
const test = romanToInt(s);
console.log('ans', test);
