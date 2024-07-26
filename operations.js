let number = 5;

let anotherNumber = '5';

console.log(number - anotherNumber);

console.log(number > anotherNumber);
console.log(number <= anotherNumber);
console.log(number > anotherNumber);

console.log(number == anotherNumber);//checks numbers -equality
console.log(number === anotherNumber);//checks types -strictequality
console.log(number != anotherNumber); //not equal
console.log(number !== anotherNumber); //strict not equal
console.log(number && anotherNumber); //AND
console.log(number || anotherNumber); //OR
console.log(!number);//NOT


let isSunny = false;
const WEATHER_MESSAGE = isSunny ? 'Grab your sunglasses' : 'Stay home';
console.log(WEATHER_MESSAGE);