
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
  
const  toPostfix = (infix) => {
    const formula = infix.split('');
    const stack = new Stack();
    const postfix = [];
  
    formula.map((el) => {
      if ('+-*/'.indexOf(el) === -1) {
        postfix.push(el);
      } else {
        const lastPriority = priority(stack.peek());
        const elPriority = priority(el);
  
        if (!stack.isEmpty() && elPriority <= lastPriority) {
          postfix.push(stack.pop());
        }
  
        stack.push(el);
      }
    });
  
    while (!stack.isEmpty()) {
      postfix.push(stack.pop());
    }
    return postfix.filter( val => val != ' ');
  };
  
  
var calculate= function(s){
    const stack = new Stack();
  
    const formula = toPostfix(s);

    console.log('formula ' , formula)
  
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
            cal = last - penultimate;
            stack.push(cal);
            break;
          case '*':
            cal = last * penultimate;
            stack.push(cal);
            break;
        case '/':
            cal = penultimate / last;
            console.log('cal ', cal)
            stack.push(Math.floor(cal));
            break;
  
          default:
            break;
        }
      }
    });
  
    return Number(stack.toString());
  };
  


const input =  "42"
// const postfix = toPostfix(input)
const ans = calculate(input)

console.log('ans ' , ans)