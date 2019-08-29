
const input = {
    text : "alice is a good girl she is a good student",
    first : "a",
    second:"good" 
}
var findOcurrences = function(text, first, second) {
    const textArray = text.split(" ")
    
    const third = textArray.map( (value,i) => {
        if(value === first & textArray[i+1] === second){
            return textArray[i+2]
        } return null
    }).filter( i =>(i != null))

    return third
};

const ans = findOcurrences(input.text,input.first,input.second)
console.log(ans)