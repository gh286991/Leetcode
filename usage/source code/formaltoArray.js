const input = '42';

// const c = input.split('+')

// c.forEach( v=>{
//     console.log(v)
// })


const calculate = function (s) {
  if (s.length === 0) {
    return 0;
  }

  const stack = [];

  for (let i = 0, n = 0; i <= s.length; i++) {
    const c = s.charAt(i);

    if (c === ' ') continue;

    if (c >= '0' && c <= '9') {
      n = n * 10 + parseInt(c);
      continue;
    }

    stack.push(n);
    stack.push(c);
    n = 0;
  }

  stack.splice(stack.length - 1, 1);
  return stack;
};

console.log(calculate(input));
