let circleArea;

const r = prompt("Enter Radius : ");
circleArea = Math.PI * r * r;

const int = parseFloat(prompt("Enter a real Value : "));
const roundInteger = Math.round(int),ceilInteger = Math.ceil(int),floorInteger = Math.floor(int),truncInteger = Math.trunc(int);

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }

// console.log(getRndInteger(123456,999999))