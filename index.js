// 1. Javascript Console APIS 

/*console.log("Hello world.")
console.warn("warning stay away")
console.error("sorry error")
console.info("this is very valuable info")
console.assert(4==4)
console.assert(8==(10-1))  //Assertion failed */

// 2. Different ways to write Javascript

// 3. Variables in Javascript  (3)(vlc)

// // a)var
// var number1 =5;
// var number2 =6;

// // b)let                         (let is best b/c its block scope)       
// let number3 =1;
// let number4 =4;

// // c) const
// // const a="Ammar";

// // 4. Datatypes in Javascript 

// //Numbers
// let num1=24;
// let num2=78.1;

//Strings
// let str1="Rafeh";
// let str2='Ammar';

// //Boolean
// let bool1=true;
// let bool2=false; 

// //Undefined
// let x;

// //Null
// let y=null;

// //Object (key value pair)
// let marks={ Ammar:99,Rafeh:93,Moiz:95};

// //Arrays (special type of object,used to store collection of data)
// let arr=[1,"ammar",9.1,6,56];

//How to take input from user ? by using prompt();

//a:
// let name;    
// name=prompt("Kindly Enter your name:");
// console.log("Hello",name,"!");

//b: prompt() takes input as a string, converting that string into number
//  using parseInt() & parseFloat() function.
// let i,o;     
// i=parseFloat(prompt("Enter i value"));
// o=parseFloat(prompt("Enter o value"));


//What to use for line ending ? by using \n

// let stringsinmultilines =" This is first line. \n This is second line. \n This is third line. ";
// console.log(stringsinmultilines);

// 5. Operators in JavaScript

//a.Arithematic operators: (+,-,*,/,%)

// let q=13;
// let w=2;
// console.log("The addition of q and w is:",q+w);
// console.log("The substraction of q and w is:",q-w);
// console.log("The multiplication of q and w is:",q*w);
// console.log("The division of q and w is:",q/w);
// console.log("The division of q and w is:",q%w);

//b.Assingment operatos: (=,+=,-=,*=,/=)

// let e=w;
// console.log(e);

// e+=2; //e=e+2
// console.log(e);
// e-=2; //e=e-2
// console.log(e);
// e*=2; //e=e*2
// console.log(e);
// e/=2; //e=e/2
// console.log(e);

//c.Comparison Operators: (==,!=,<=,>=,<,>)

// let r=5;
// let t=10;

// console.log(r==t);
// console.log(r!=t);
// console.log(r<=t);
// console.log(r>=t);
// console.log(r<t);
// console.log(r>t);


//d.Logical Operators (&&,||,!)

// console.log(true && true);
// console.log(false && true);
// console.log(true || true);
// console.log(false || true);
// console.log(!true);
// console.log(!false);

//e.Increment/ Decrement Operators (++,--)

// let u=1;
// // let i=2;

// u=i++;
// console.log(u);
// console.log(i);

// 6. Functions in JavaScript

// function avg (a,b) {     //e.g#1: Function who calculates average
//     c= (a+b)/2
//     return c;
// }
// d=avg(10,10);
// e=avg(20,30);
// console.log(d,e);


// function percentage(a,b,c,d,e,f,g){         //e.g#2: Function who calculates percentage
//     i=(a+b+c+d+e+f+g)/1100*100
//     return i;
// }
// j=percentage(154,141,29,39,153,153,155);
// console.log(j,"%");

//7.Conditional Statements in JavaScript

//a.Example of if-else with in a function

// function age(a){                  //A function who checks via a person drive a car or not.
//                                  //With in function, if else ladder is implemented.
// if(a<=0 || a>100)
// {console.log("Sorry wrong entry")}


// else if(a<18)
// {console.log("You cannot drive a car");}

// else if(a>=18)
// {console.log("You can drive a car");}

// }
//c=age(parseFloat(prompt("Enter your age")));

//b.Example of switch statement by making a calculator
/*
let a=parseFloat(prompt("Enter the value of a"));
let b=parseFloat(prompt("Enter the value of b"));
let c=parseFloat(prompt("Enter 1 for +, 2 for -, 3 for * and 4 for division"));
d=c;

switch (d) {
    case 1:
        console.log(a+b);
        break;

    case 2:
        console.log(a-b);
        break;    

    case 3:
        console.log(a*b);
        break;

    case 4:
    console.log(a/b);
    break;  

    default:
    console.log("Sorry wrong entry");
    break;
} */


//8.Loops in JavaScript (a,b,c)

//a.While loop

// array=[12,3,4,6];

// let i=0;
// while (i<5) 
// {
//     console.log(array[i]);
//     i++;
// };

//b.Do while loop

// array=[12,"Ammar",3,9,0,1];

// let j=0;
// do {
//     console.log(array[j]);
//     j++;
// } while (j<6);


//c.For loop

// array=[1,2,22,32,4,9];
// for (let x=0; x<6; x++)
// {console.log(array[x]);};

//foreach loop
// this is for example
// array=[1,2,22,32,4,9];              
// array.forEach(function(element) //To print elements of an array one by one we can also use 
//                                //foreach loop
// {
//     console.log(element)
// });

//9.Break & Continue Statements in JavaScript

// let array=[1,2,3,"Ammar",4,5];
// for(let g=0; g<6; g++)
// {

//     if(g==3)
//     continue;
//     console.log(array[g]);
// };

//10.Array Methods

// let arr=[1,2,3,"Ammar",4,true];
// //i. pop()
// arr.pop();
// console.log(arr);
// //ii. push()
// arr.push("Rafeh",true);
// console.log(arr);
// //iii.shift()
// arr.shift();
// console.log(arr);
// //iv.unshift()
// arr.unshift();
// console.log(arr);
// //v.tostring()
// arr.toString();
// console.log(arr);
// //vi. sort()
// let myarr=[96,73,9,13,21,350,10];
// myarr.sort;
// console.log(myarr);

//11.String Methods

// let mystring='Ammar is a good boy';
// console.log(mystring.length);

// mystring.indexOf("is");
// console.log(mystring.indexOf("is"));

// let string='Ammar is a good good good good boy';
// console.log(string.lastIndexOf("good"));

// console.log(mystring.slice(3,12));

//12.Dates Methods in Javascript

// new Date();
// getFullyear();
// // let x=getDay();
// console.log(getDay());

//13.DOM Manipulation in Javascript


