/*
 * @lc app=leetcode id=946 lang=javascript
 *
 * [946] Validate Stack Sequences
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const Stack = []
    const popList = popped.reverse()

    pushed.forEach( val =>{
        Stack.push(val)

        let lastValueStack = Stack[Stack.length-1]
        let lastValuePopList = popped[popList.length-1]

        while (lastValueStack === lastValuePopList ) {
            Stack.pop()
            popList.pop()

            lastValueStack = Stack[Stack.length-1]
            lastValuePopList = popped[popList.length-1]

            if( Stack.length == 0 && popList.length==0 ){
                break 
            }
        }
    })

    if( Stack.length == 0 && popList.length==0 ){
        return true
    } else return false

    // console.log(Stack)
}
// @lc code=end

push = [1,2,3,4,5]
pop = [4,5,3,2,1]

test = validateStackSequences(push,pop)
console.log('test' , test)