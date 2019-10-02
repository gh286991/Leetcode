
/**
 * @param {string} s
 * @return {number}
 */

const items = [];

class Stack {
  constructor() {
    this[items] = [];
  }

  push(element) {
    this[items].push(element);
  }

  pop() {
    return this[items].pop();
  }

  peek() {
    return this[items][this[items].length - 1];
  }

  isEmpty() {
    return this[items].length === 0;
  }

  toString() {
    return this[items].toString();
  }
}


const priority = (el) => {
    if (el === '+' || el === '-') {
      return 1;
    } if (el === '*' || el === '/') {
      return 2;
    } return 0;
  };

const toArray = function(s) {
    
    if (s.length === 0) {
        return 0;
    }
    
    let stack = [];
    
    for (let i=0, n=0; i <= s.length; i++) {

        let c = s.charAt(i);

        if(c===' ') continue;
        
        if(c >= '0' && c <= '9') {
            n = n * 10 + parseInt(c);
            continue;
        } 

        stack.push(n)
        stack.push(c)
        n = 0;
    }

    stack.splice(stack.length-1,1)
    return stack
    
};

const  toPostfix = (infix) => {
  const stack = new Stack();
  const postfix = [];

  infix.forEach((el) => {
    if ('+-*/'.indexOf(el) === -1) {
      postfix.push(el);
    } else {
      while (!stack.isEmpty()
       && priority(el) <= priority(stack.peek())
      ) {
        postfix.push(stack.pop());
      }

      stack.push(el);
    }
  });

  while (!stack.isEmpty()) {
    postfix.push(stack.pop());
  }
  return postfix;
  };
  
  
var calculate= function(s){
    const stack = new Stack();
    const array = toArray(s)

    const formula = toPostfix(array);
 
  
    formula.map((el) => {
      if ('+-*/'.indexOf(el) === -1) {
        stack.push(el);
      } else {
        const last = Number(stack.pop());
        const penultimate = Number(stack.pop());
        let cal;
  
        switch (el) {
          case '+':
            cal = last + penultimate;
            stack.push(cal);
            break;
        case '-':
            cal = penultimate - last;
            stack.push(cal);
            break;
          case '*':
            cal = last * penultimate;
            stack.push(cal);
            break;
        case '/':
            cal = penultimate / last;
            stack.push(Math.floor(cal));
            break;
  
          default:
            break;
        }
      }
    });
    
    return Number(stack.toString());
  };
  


const input =  "6+5*6*6"
// 2+30-56
// 32-56
// const postfix = toPostfix(input)
const ans = calculate(input)


console.log('ans ' , ans)