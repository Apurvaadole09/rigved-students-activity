let x = 10;
let y = 20;
let z = x + y;
console.log(`z : ${z}`);
setTimeout(()=> {
    console.log('inside callback');
},0);
console.log('End of program');
