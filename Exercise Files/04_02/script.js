function whatIsBigger(a,b){
    var result;
    a>b ? result = ["firstNumber", a] : result = ["secondNumber", b];
    return result
}
var firstNumber = 3/4;
var secondNumber = 5/7;

// whatIsBigger(firtNumber,secondNumber);
// whatIsBigger(7/16,13/25);
// whatIsBigger(1/2,3/4);
var numberResults = whatIsBigger(firstNumber, secondNumber);
console.log(numberResults)
console.log("1st number result:", firstNumber);
console.log("2nd number result", secondNumber);
console.log("Number " + numberResults[0] + " with a value of " + numberResults[1] + " is the biggest!");