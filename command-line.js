// To Echo back to cmd line
// echo string

// This holds the arguments passed to file while running
// process.argv
// console.log(process.argv);

// To Reduce the Array to Single Element and Summing Up all customElements
const arguments = process.argv.slice(2);
const sum = arguments.reduce((acc,val)=>acc+parseInt(val),0);
console.log(sum);

