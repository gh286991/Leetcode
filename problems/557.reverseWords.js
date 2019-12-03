const input = "Let's take LeetCode contest";

const reverseWords = function (s) {
  const textArray = s.split(' ');
  const reverse = textArray.map((value) => value.split('').reverse().join('')).join(' ');
  // const reverseString =  reverse.join(' ');

  return reverse;
};

const ans = reverseWords(input);
console.log(ans);
