const input = [4, [[1,3],[1,4],[2,3],[2,4],[4,3]]]

var findJudge = function(N, trust) {
    const trustOthers = new Set(trust.map(v=>v[0]))
    const people = Array.from(new Array(N), (val, index) => index + 1);

    const notrusting = people.filter( v => {
        return !trustOthers.has(v)
    })

    if(notrusting.length != 1){
        return -1
    }

    const trustN = trust.filter( pair => {
        return pair[1] == notrusting
    })

    if(trustN.length == N-1){
        return notrusting[0]
    } else { return -1}


};

const ans = findJudge(input[0] , input[1])
console.log(ans)
