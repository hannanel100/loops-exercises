/* prints numbers from i to n
var n = 20;
var i = 1;
while(i<=n){
    console.log(i);
    i++;
}*/

/* prints numbers from n to i
var j = n;
while(j>0){
    console.log(j);
    j--;
}*/
/* prints even numbers from 1 to 100
var k=1;
while(k<=100){
    if(k%2==0){
        console.log(k);
    }
    k++;
}*/

/* prints sum from 1 to n
var sum=0;
for(var i=0; i<n; i++){
    sum+=i+1;
}
console.log(sum);
*/

/*multiplation board 
for(var i=1; i<=10; i++){
    var temp = 0;
    for (var j=1; j<=10; j++){   
        temp = temp + (i*j);
        temp=" "+ temp.toString() + " ";
    }
    console.log(temp);
}
*/

/* reversing number
var num = 12345;
var rev = 0;
var temp = num;
while (temp>=1){
    rev  = rev*10 + (temp%10);
    temp = Math.floor(temp/10);
    console.log(rev);
}
console.log(num);
console.log(rev);
*/

/*checking if number is palindrom
var num = 123213;
var rev = 0;
var temp = num;
while (temp>=1){
    rev  = rev*10 + (temp%10);
    temp = Math.floor(temp/10);
}
if( num == rev){
    console.log("number is palindrom");
}
else{
    console.log("number is not a plaindrom");
}
*/

/* computing the nth power of n, assuming n is positive and greater than 0
var num = 4;
var result=1;
for(var i=0; i<num; i++){
    result*=num;
}
console.log(result);
*/

/*computing the factorial of num
var num = 15;
var result=1;
for(var i=0; i<num; i++){
    result*=i+1;
}
console.log(result);
*/
/* euclidean algorithm for finding max denominator of 2 numbers
var a;
var b;
function gcd(a, b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b);

}
var gcd=gcd(1071,1029);
console.log(gcd);
*/
/*calculating if num is a prime number
var num = 17;
var count=0;
for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log(num + " is not a prime");
        count=1;
        break;
    }
}
if(count==0){
    console.log(num + " is a prime");
}
*/
/*checking if number is armstrong
function getLength(number) {
    return number.toString().length;
}
var num = 10;
var sum=0;
var temp = num;
for (var i = 0; i < getLength(num); i++) {
    sum += Math.pow((temp % 10), getLength(num));
    temp = Math.floor(temp / 10);
}

if (sum==num){
    console.log(num + " is Armstrong");
}
else{
    console.log(num + " is not Armstrong");

}
*/
/*checking if num is a perfect number
var num=33550336;
var sum=0;
for(var i=0; i<num; i++){
    if(num%i==0){
        sum+=i;
    }
}
if(sum==num){
    console.log(num + " is a perfect number")
}
else{
    console.log(num + " is not a perfect number")
}
*/
/*printing fibonachi series up to n number
var n=20;
var x1 = 1;
var x2 = 1;
var t=0;
var str= "";
for (var i=0; i<n; i++){
    t=x2;
    x2=x1+x2;
    x1=t;
    str+= x1 + " , ";
}
console.log(1 + " , " + str);
*/