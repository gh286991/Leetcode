const input = [2,1,2,5,3,2]

var repeatedNTimes = function(A) {
    const repeat = A.filter((e, index, arr)=>{
        return arr.indexOf(e) !== index;
    });

    const result = [...(new Set(repeat))];

    return result
};

var repeatedNTimes2 = function(A) {
 
    let map= new Map();

    for(let it of A){
        if(map.get(it)){
            return it;
        }else{
            map.set(it, 1);
        }
    }
};



const ans = repeatedNTimes(input)
console.log(ans)