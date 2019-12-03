
let fizzBuzz = function (n) {
  const ans = [];

  for (let i = 1; i < n + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      ans.push('FizzBuzz');
    } else if (i % 3 == 0) {
      ans.push('Fizz');
    } else if (i % 5 == 0) {
      ans.push('Buzz');
    } else ans.push(String(i));
  }


  return ans;
};


const ans = fizzBuzz(20);

console.log(ans)
;