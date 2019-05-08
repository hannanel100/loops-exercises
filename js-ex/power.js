// computing the nth power of number
function powOfNum(num, pow) {
    for (var i = 0; i < pow; i++) {
        result *= num;
    }
    return result;
}
var num = -2;
var pow = -3;
var result = 1;
if (pow < 0) {
    result = 1 / powOfNum(num, pow * (-1));
}
else if (pow > 0) {
    result = powOfNum(num, pow);
}
console.log(result);

