// ES6 Set
let instruments = new Set();

instruments.add('piano');
instruments.has('guitar'); // false
instruments.add('drum');
instruments.delete('guitar'); // 裡面根本沒有 guitar 所以回傳 false
instruments.size; // 2
[...instruments] //['piano', 'drum']

console.log('instruments' , instruments)
// or use Array.from, 
Array.from(instruments); 