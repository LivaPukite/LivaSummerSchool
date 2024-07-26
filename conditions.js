function testNumbers(numbers){
    let result;
    if (numbers > 0) {
        result = 'positive';
    } else{
        result = 'negative';
    }
    return result;
}
console.log(testNumbers(1));


let number = 1;
const RESULT = number > 0 ? 'Positive' : 'Negative';
console.log(RESULT);