console.log("hello world")
let a = 78;
a=79;
console.log(a);
const b=45;
// b=67;
console.log(b);
let x=10+5;
x+=6;
x++;
x--;
--x;
++x;
console.log(x);
let y=8;
console.log(y>x);
const massmark=78;
const heightmark=1.69;
const massjohn=92;
const heightjohn=1.92;
const BMImark=massmark/(heightmark**2)
const BMIjohn=massjohn/(heightjohn**2)
console.log(BMIjohn," ",BMImark)
const markhigherbmi= BMImark>BMIjohn;
console.log(markhigherbmi)
let str1="shrawani kumari";
let str12="shrawani kumari";
console.log("soni \n\kumari");
console.log(`I'm a ${str1}`);
if(19==="19"){
    console.log("found number")
}
else{
    console.log("not found number")
}
// function functName(arg1,arg2){
let functName=(arg1,arg2)=>{
    return arg1**2+arg2;
}
let functName1=(frt1,frt2)=>{
    let abc=functName(frt1,frt2)
    let juice =`this is more famous fruits like ${abc}`;
    return juice;
}
console.log(functName1(7,9));

// challenge 4

let dolphins=(97+100+106)/3;
let kolas=(96+93+86)/3;
if(dolphins>kolas){
    console.log("dolphins is winner");
}
else if(dolphins==kolas){
    console.log("Nobody is winner");
}
else{
    console.log("kolas is winner");
}

// function challenge

let average = (a,b,c)=>{
    return (a+b+c)/3
}
console.log(average(44,23,71));
console.log(average(65,54,49));

let age = 23;
age>=18 ? console.log("More than 18 years"):console.log("less than 18 years");

// ARRAY challenge

let array = (bill)=>{
    return bill;
}
console.log(array([2,3,4,5,6]));
// let bills=[3,4,6,8];
// bills.splice(2,3);
// console.log(bill , bills[3]);
// console.log(bills)
let arr=[28,4,98,7,8,4,7];
ab=arr.sort();
console.log(ab);
console.log(arr.splice(5));
arr1=[8,6,0,4,3,7,2];
arr1.sort();
console.log(arr1);
let str2="ABCDEFTHG"
console.log(str2.toLocaleLowerCase());

// object
let obj={first:"soni",last:"kumari" , date:"nothing", arr:[7,4,9,2]};
console.log(obj['arr']);

let obj1={first:"soni",last:"kumari", data : function(){
    console.log(this);
    return 76+9;
    console.log(this);
}
};
console.log(obj1.data())

