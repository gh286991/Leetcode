const input = [1,2,3,4,5]

const node =  function(val) {
        this.val = val;
        this.next = null;
}

var middleNode = function(head) {
    const L = head.length
    let mid
    if(L%2 == 0){
        mid = Math.round(L/2)
    }else {mid =  Math.round(L /2)-1}

    const midArray = head.splice(mid, L)
    
    return midArray
};

const ans = middleNode(input)
console.log(ans)

const link = node(input)
console.log(link)