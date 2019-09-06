const input = [4, [[1,3],[1,4],[2,3],[2,4],[4,3]]]

var findJudge = function(N, trust) {
    
    let trustingTownsPeople = new Set(trust.map( pair => pair[0]));
    // console.log("Trusting towns people:", trustingTownsPeople);
    
    //There can only be 1 towns person that doesn't trust, otherwise there is no judge
    if( (N - trustingTownsPeople.size) !== 1)  return -1;
    // console.log( trustingTownsPeople.length)
    
    let allTownsPeople = Array.from(new Array(N), (x,i) => i + 1);
    //console.log("All towns people", allTownsPeople);
    
    let untrustingTownsPeople = allTownsPeople.filter(townsPerson => !trustingTownsPeople.has(townsPerson));
    // console.log("Untrusting towns people", untrustingTownsPeople);
    
    //If there is anything other than 1 untrusting towns person, then there is no town judge!
    if(untrustingTownsPeople.length !== 1) return -1;
    
    let potentialJudge = untrustingTownsPeople[0]; //The one and only possibility
    
    //Everyone must trust the judge (except the judge (him/her)self)
    if( trust.filter( pair => {
        console.log(pair)
        console.log(potentialJudge)
        return pair[1] == potentialJudge
    }).length != N-1) return -1;
    
    //We found the judge!
    return potentialJudge;
    
};

const ans = findJudge(input[0] , input[1])
console.log(ans)
