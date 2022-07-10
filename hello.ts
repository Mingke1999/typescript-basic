/**
 * tsc -w file automatically compile after every time save
 */
function add(a:number,b:number){
    return a+b;
}

console.log(add(10,30));

var num:number = 10;
let age:number = 30;
num = 20;
console.log(num);

if(true){
    let demo:string='demo'
    console.log(demo) //let working inside function, var more spread
}

for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i); //use let 0 1 2 3 4
        //use var 5 5 5 5 5
    })
}
