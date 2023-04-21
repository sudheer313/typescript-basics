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

// //print a string
// let myName:string="Nihar";

// console.log(myName);

// //add two numbers
// const sum=function add(a:number,b:number):number {
//     return a+b;
    
// }
// console.log(sum(2,3));

// //interface

// interface Person{
//     name:string;
//     age:number;
// }

// let john:Person={
//     name:"John",
//     age:30
// }

// console.log(john);
// console.log(john.name);
// console.log(john.age);

//Interface Employee

// interface Employee {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone?: string;
//     address?: {
//       street: string;
//       city: string;
//       state: string;
//       zip: string;
//     };
//     departments: string[];
//     hireDate: Date;
//     isManager: boolean;
//     getFullName: () => string;
//     getDepartmentList: (showIds?: boolean) => string[];
//   }
  
//   let nihar: Employee = {
//     id: 123,
//     firstName: "Nihar",
//     lastName: "Kandula",
//     email: "nihar@gmail.com",
//     departments: ["Sales", "Marketing"],
//     hireDate: new Date(),
//     isManager: false,
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     getDepartmentList: function(showIds = true) {
//       if (showIds) {
//         return this.departments.map((dept, i) => `${i + 1}. ${dept}`);
//       } else {
//         return this.departments;
//       }
//     }
//   };
  
//   console.log(nihar.getFullName());
//   console.log(nihar.getDepartmentList());
//   console.log(nihar.hireDate);
  
console.log("Sudheer");

