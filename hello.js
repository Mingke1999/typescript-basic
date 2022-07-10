/**
 * tsc -w file automatically compile after every time save
 */
function add(a, b) {
    return a + b;
}
console.log(add(10, 30));
var num = 10;
var age = 30;
num = 20;
console.log(num);
if (true) {
    var demo = 'demo';
    console.log(demo); //let working inside function, var more spread
}
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i); //use let 0 1 2 3 4
        //use var 5 5 5 5 5
    });
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
