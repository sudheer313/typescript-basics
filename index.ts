// function greeter(name:string) {
//     console.log(`Hello, ${name}!`);
    
//     }

// greeter("World")

// //number

// let count:number=5;

// // string

// let name1:string="Nihar";

// //Boolean

// let isTrue:boolean=true;

// //Array

// let list:number[]=[1,2,3,4];

// //Tuple
// let person:[string,number]=["John",30];

// //enum
// enum Color{Red,Green,Blue}
// let color:Color=Color.Red;
// //Any
// let anything:any="hello";
// anything=5;

// //Null and undefined

// let n:null=null;
// let u:undefined=undefined;

//print a string
let myName:string="Nihar";

console.log(myName);

//add two numbers
const sum=function add(a:number,b:number):number {
    return a+b;
    
}
console.log(sum(2,3));

//interface

interface Person{
    name:string;
    age:number;
}

let john:Person={
    name:"John",
    age:30
}

console.log(john);
console.log(john.name);
console.log(john.age);
