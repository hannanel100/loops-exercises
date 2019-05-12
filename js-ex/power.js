// computing the nth power of number
function powOfNum(num, pow) {
    for (var i = 0; i < pow; i++) {
        result *= num;
    }
    return result;
}
function getLength(number) {// getting the length of a floating number so i could later respresent it as an integer multiplied by 10^-n where n is the return from this function
    return (number.toString().length -1);
}
var num = 2;
var pow = 0.525;
var result = 1;
if (pow < 0) {
    result = 1 / powOfNum(num, pow * (-1));
}
else if (pow >= 1) {
    result = powOfNum(num, pow);
}
else if (0 < pow && pow < 1) {
    result =  getLength(pow);
}
console.log(result);

