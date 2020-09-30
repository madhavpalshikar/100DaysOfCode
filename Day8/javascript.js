//import Jclass from './classes.js';
var one = 'One';
const two = 'Two';
let three = 'Three';

{
    let four = 'Four';
    console.log('Four Test1', four);
}

//spread
let arr = [1,2,3,4,5,6,7,8,9,0];
console.log('Spread', [...arr]);

let name_v = 'Name';
let age_v = 'Age';

let obj = {
    name: name_v,
    age: age_v
};

//Destructuring
let { name, age } = obj;
console.log('Destructuring', name, age);

//Rest
let restfunction = (...rest)=>{
    console.log('rest params', rest);
}
restfunction(1,2,3,4);

// let j = new Jclass();
// j.one();
// j.two();

//map

let m = new Map();
m.set('1',1);
m.set('2',2);
m.set('3',3);
console.log(m.get('3'));
console.log(m.has('3'));
console.log(m.delete('3'));
console.log('clear',m.clear());
console.log(m.size);
console.log(m.keys());
console.log(m.values());
console.log(m.entries());
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  



//set
let s = new Set();
s.add(1);
s.add(2);
s.add(3);
s.add(4);
s.add(5);




console.log(s.has(2));
console.log(s.delete(3));
console.log('clear',s.clear());
console.log(s.size);
console.log(s.keys());
console.log(s.values());
console.log(s.entries());

let set = new Set(["oranges", "apples", "bananas"]);
for (let i of set) console.log(i);
set.forEach((val, valAgain, set) => {
    console.log(val);
})