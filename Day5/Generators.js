/*
    Generators are created by generator functions function* f(…) {…}.
    Inside generators (only) there exists a yield operator.
    The outer code and the generator may exchange results via next/yield calls.
*/

//generator function*
function* generateList(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 3;
}

let gen = generateList();

console.log('next().value', gen.next().value);

for(let i of gen){
    console.log('Generator value', i);
}

let sequence = [0, ...generateList()];
console.log(sequence);

let range = {
    from: 1,
    to: 10,
    *[Symbol.iterator](){ // a shorthand for [Symbol.iterator]: function*()
        for (let index = this.from; index <= this.to; index++) {
            yield index;
        }
    }
}

console.log('range', [...range]);

function* createRange(start, end){
    for (let index = start; index <= end; index++) {
        yield index;
    }
}

console.log('createRange', [...createRange(1,100)]);


function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }

  console.log('generate pass:', str);