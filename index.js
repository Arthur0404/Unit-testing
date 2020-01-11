function sum(a, b) {
    return a + b;
}
function sum1(a,b){
    return a * b;
}
function isAdult(age){
    if ((age >=0) && (age < 21)){
        return false;
    } if (age >= 21){
            return true;
    }
}
function sortArrayUp(arr) {
    arr.sort(( a, b) => a -b );
    return arr;
}
function isPalindrome(str){
    let arr = '';
    for (let i = str.length -1; i >=0; i--){
        arr += str[i];
    }
    if (arr.toLowerCase() === str.toLowerCase()) return true;
    else return false
}
function isOddNumber(number){
    if (typeof (number) !== 'number') return undefined;
    else  if (number % 2 === 1) return true;
    else return false
}
function isEvenNumber(number){
    if (typeof (number) !== 'number') return undefined;
    else  if (number % 2 === 0) return true;
    else return false
}
function revArray(array){
    return array.reverse()
}

module.exports = {sum, sum1, isAdult, sortArrayUp,isPalindrome, isOddNumber, isEvenNumber,revArray};
