// // // // var myName='my name is Amresh Kumar';
// // // // var name='helo';
// // // // console.log(name);

// // // //valid hai  var _myName="Amresh jee";
// // // // valid hai var $_myName='hii welcome to javascript';
// // // // valid var my___name='hii welcome to javascript';
// // // // valid hai var _1my_Name ="Amresh Thakur ";
// // // // valid nahi var myName% ="helo"
// // // //console.log(myName%);

// // // /******* Section 4 Data Types in JavaScript ********/
// // // // var myName ="Amresh jee";
// // // // console.log(myName);

// // // // typeof operator 
// // // // console.log(typeof(myName));

// // // var myAge=20;
// // // console.log(myAge);
// // // console.log(typeof(myAge));

// // /* Check Boollean true or false */
// // // var iAmAmresh =false;
// // // console.log(iAmAmresh);
// // //     //type of
// // //     console.log(typeof(iAmAmresh));


// // // var myName =20;
// // // var myNaam ="20";
// // // console.log(myName+myNaam);

// // //console.log(10 - "20");  Bug hai
// // // console.log("java"+ "Script");
// // // console.log("java"- "Script");

// // // console.log(true - true); // this number
// // // console.log(false - false); // this number
// // // console.log("Amresh" - "Kumar");
// // // console.log(false - true); // this number
// // //console.log(false - true );
// // //Differance between null vs undefined
// // // var iAmAmresh=null;
// // // console.log(iAmAmresh);
// // // console.log(typeof(iAmAmresh));
// // // //2nd javascript bug
// // // var iAmStandBy;
// // // console.log(iAmStandBy);
// // // console.log(typeof(iAmStandBy));
// // // 2nd Interview Question 
// // /* what is NaN ? 
// //  -> NaN is a property of the global object.
// //  -> in other words,it is a variable in global scope.
// //  -> the initial value of NaN is Not-A-Number.
// //  */
// // // var MyPhoneNumber=7870931918;
// // // var MyName ="Amresh kumar";
// // // console.log(isNaN(MyPhoneNumber));
// // // console.log(isNaN(MyName));
// // // if(isNaN(MyName)){
// // //     console.log("Enter the valid phone Number");
// // // }

// // /*Challange*/
// // /*console.log(NaN === NaN);
// // console.log(Number.NaN === NaN);
// // console.log(isNaN(NaN));
// // console.log(isNaN(Number.NaN));
// // console.log(Number.isNaN(NaN));
// // */

// // /* ********EXPRESION AND OPERATOR ***

// // 1-> Assiginment Operators(=)  An Assiginment operators assigin values to its left operand 
// // => Bassed on the value of ist right operand 
// // => The Simple assiginment operator is equal (=)
// // ex->*/
// // // var x =5;
// // // var y=59;
// // // console.log("Is the both x and Y are equal" + x == y);
// // // // I will Tell you when we will see es6
// // // // console.log(`Is the both the X and Y are equal : ${x==y}`);

// // /* Airthmatic operator
// //     -> An Airthmatic operator takes numerical values.
// //     -> (either literals or variable) as their operands and 
// //     returns a single value numerical value.

// // console.log(3+3);
// // console.log(3-3);
// // console.log(3*3);
// // console.log(3/3);
// // console.log(3+3);
// // console.log("remainder operator " + 81%8);
// // */

// // /* Increment Operator and Decrement Operator 
// // => Operator: x++ or ++x or x-- or --x
// // => if used postfix,with operator after operand
// // ( for examole x++ is incerement operator, x-- is decerement operator).
// // => the incerment operators increments and  returns the value before incrementing. 
// // */
// // // var num =15;
// // // var newNum = num++ + 5;
// // // console.log(num);
// // // console.log(newNum++);

// // /*
// // => if used prefix, with operator before operand (for example ,x++)
// // => the increment operator increments and returns the value after incrementing
// // */

// // // var num =15;
// // // var newNum = ++num + 5;
// // // console.log(num);
// // // console.log(newNum);
// // //**********Comparasion operator***************
// // /* A comprasion operator compares its operand and 
// // returns a logical values based on wheather the comparison is true.*/

// // //var a=30;
// // //var b=10;

// // // Equal (==)
// // //console.log(a == b);
// // // Not Equal To (!=)
// // //console.log( a != b);

// // // Grater than(>)
// // //console.log(a < b);

// // // Grater Than or equal to (>=)
// // //console.log(a >= b);

// // /**************** LOGICAL OPERATOR *********************/
// // // Logical Operator are typically used with boolean(Logical) values;
// // // when they are, they return a Boolean value.
// //   // var a =30;
// //   // var b =-20;

// //   // LOGICAL AND (&&)
// //   // The logical AND (&&) Operator(logical conjuction) for a set of
// //   // operands is true if and only if one or more of its operands is true.
// // ///console.log(a > b && b > 0);



// // // Logical OR (||)
// // // The logical OR (||) Operators (Logical disjunction) for a set of 
// // // operands is true if and only if more or more of its operands is true.

// // //console.log((a < b) || (b > 0) || (b > 0));

// // // ******LOGICAL NOT (!)**********
// // // The Logical NOT(!) operator (Logical complement, Negation)
// // // Takes truth to falsity and Vice versa.

// // // console.log(! (a>0) || (b<0));
// // // console.log(!true);

// // //   String Conatenation (Operator) 
// // // concatenation operator (+) concenation two string values together, 
// // // returning another string that is the union of the two operand strings.

// // // console.log("Hello, World!");
// // // console.log("hello" + " world");
// // // var MyName ="Amresh";
// // // console.log(MyName +" Kumar");
// // // console.log(MyName +" Sharma");
// // //Challange Time
// // // What will be the output of  3**3?
// // // what will be the output, when we add a number and  a string?
// // //write a programe to swap two Numbers?
// // // write a programe to swap  Two number without using third variable

// // //*Sol:1-> 
// // // console.log( 3**3);// 3*9
// // // console.log( 10 ** -1);// 1/10

// // // Sol:2->
// // // console.log(5 + " Thakur");

// // // Sol:3->
// //  /*var a=5;
// //  var b=6;
// //  var c= b;  //c=10;
// //     b=a;  //5
// //     a=c;  
// //  console.log(" The value is a = "+a);
// //  console.log(" the value is b = "+b); */

// //  // sol:4->
// //  /*
// //  var a=5;
// //  var b=6;
// //  a=a+b; //11
// //  b= a-b; //5
// //  a=a-b; // 6
// //  console.log(" THe value is a: " +a);
// //  console.log(" The value of b: " +b);
// // */
// // // INTERVIEW QUESTIONS: Difference between == vs === ?
// // //solution

// // // check (==)
// // // var num1=5;
// // // var num2 ='5';
// // // console.log(typeof(num1));
// // // console.log(typeof(num2));
// // // console.log(num1 == num2);

// // // // check the (===)
// // // var num1=5;
// // // var num2 ='5';
// // // console.log(typeof(num1));
// // // console.log(typeof(num2));
// // // console.log(num1 === num2);


// // // Control Statement & Loos
// // /* 
// // 1: if..Else -
// // 2: Switch Statement
// // 3: While Loop
// // 4: Do-While Loop
// // 5: For Loop
// // 6: For in Loop
// // 7: For of Loop
// // 8: Conditional (Ternary Operator)
// // */

// // //1: if..Else -> The if statement a statement if a Specified condition is truthly.
// // // if the condition is falsy,another statement can be excuted.
// // /*
// // 1: example
// // var tomr ='ranning';
// // if(tomr == 'raining')
// // {
// //     console.log("Plese take Raincot");
// // }
// // else  {
// //     console.log(" No Need to Take a RainCot");
// // }
// // */
// // // Write a program that works out wheather if a given year is leap year or Not?
// // // var year = 2021;
// // // if (year % 4 === 0){
// // //     if(year % 100 ===0){
// // //         if(year % 100 ===0){
// // //            console.log(" The year" + year + " is a leap year");
// // //              }    
// // //               else{
// // //                   console.log("The year " + year + "is not a leap year");
// // //             }
// // //         }else{
// // //             console.log(" The year" + year + " is a leap year");
// // //         }
// // //     }else{
// // //         console.log(" the year " + year + "is a not leap year");
// // //     } 
     
// // // var x={},
// // //   y={key:"y"},
// // //   a={key:"z"},
// // //   z={key:"z"};
// // // x[y] = 11;
// // // x[z] = 21;
// // // x[a] = 43;
// // // console.log(x[y]);
// // // var i = 1;
// // // for (;i<4;){
// // //   i = i + 1;
// // // }

// // // var i=0;
// // // do {
// // // i++;
// // //   if (i==5){
// // //      //
// // //      i=0;
// // //    }
// // // }while(i<7);

// // // var cars=2;
// // // do{
// // //   cars/=2;
// // // }while(cars<1);

// // // console.log("Number of cars: " + cars);

// // // var year=2020;
// // // debugger;
// // // if(year % 4 === 0){
// // //   if(year % 100 ===0){
// // //     if(year % 100 == 0)
// // //     {
// // //       console.log("The Year is : Leap");
// // //     }
// // //     console.log("The Year is Not leap");
// // //   }
// // //   console.log(" the year is Leap year");
// // // }
// // // else{
// // //   console.log("the Year is not leap");
// // // }

// // // What is truthly and falsy values in javascript?
// // // we have total 5 falsy values in javascript ->
// // // 0, "", undefined,null,NaN,false** os false anyway
// // // if(score = 0){
// // //   console.log("OMG, we loss the Game ");
// // // }
// // // else{
// // //     console.log(" yay , we won the game");

// // //   }

// // // conditional (ternary) Operator
// // // the onditional (ternary) operator is the only javascript operator 
// // // that takes three operands
// // // var age =19;;
// // // if(age > 18){

// // //   console.log("You are eligible to vote ");
// // // }
// // // else{
// // //   console.log("you are not eligilible for vote ");
// // // }

// // // var age =11;
// // // console.log((age > 18)? "you are Voter" : "ypu are not voter");
// // /* Switch Statement  
// // -> Evaluates an expresion, matching the expresion's value to a cases
// //  - caluse and executes statements associated with that case.

// //  // 1st without break statement
// //  // find the Area of circle and triangle and rectangle?
// //  */
// // // var area ="rectangle";
// // // var PI =3.142, l=5, b=4, r=3; 
// // // if(area == "circle"){
// // //   console.log("The area of circle is :"+ PI*r**2);
// // // }else if(area == "Triangle"){
// // // console.log("The area of thee trangle is "+ (l*b)/2)
// // // }
// // // else if(area == "rectangle"){
// // //   console.log("the area of the rectangle is:" + ( l*b));
// // // }else{
// // //   console.log("Please enter valid data");
// // // }

// // // var area ="circle";
// // // var PI =3.142, l=5, b=4, r=3; 
// // // switch(area){
// // //   case 'circle':
// // //     console.log("The area of circle is :"+ PI*r**2);
// // //     break;
// // //   case 'trangle':
// // //     console.log("The area of thee trangle is "+ (l*b)/2);
// // //     break;
// // //   case 'rectangle':
// // //     console.log("the area of the rectangle is:" + ( l*b));
// // //     break;

// // // default:
// // //   console.log("Please enter valid data");
// // // }

// // /* 4.       while loop statement ->
// // // The while loop statement creates a loop that executes a specified statement
// // as long as the test condition evalutes to true.
// //  */
// // // example of while loop
// // // var num=0;
// // // block scope
// // // while(num <= 10)
// // // {
// // //   console.log("the values is: "+num);
// // //   num++;
// // // }

// // /* 5. do-while loop -> in this condition is print output then check condition 
// // example of do-while
// // */

// // // var num=0;
// // // debugger
// // // do{
// // //   console.log("the value is: "+ num);
// // //   num++;
// // // }
// // //   while(num <= 10);

// // /* for loop => 
// //    var num=10;
// // for(initilizer; condition; iteration)
// //   {
// //     // code to be excuted
// //   }
// // */

// // // for(i=0;i<=10;i++){
// // //   debugger;
// // //   console.log("the value is:" +i);
// // // }
// // // Challange Time
// // // write a javascript programe to print table for given number (8)?



// // for(var num = 1; num <= 10; num++){
// //   var tableOf = 8;
// //   //tableOf=tableOf * num;
// //  console.log(tableOf + " * " + num + " = " + tableOf * num);
// // }

// /******** FUNCTION IN JAVASCRIPT ********
//  * Before we use a function, we need to define it.
//  1*) function Defination :- Before we use a function, we need to define it.
// - A function defination,we need to define it.
// - A functon defination (also called a function declaration, or function statement)
// - Consists of the function keyword, followed by:
// - The name of the function .
// - A list of parameters to the function,enclosed in paranthesis and separted by commas, 
// - The javascript statements that define the function, enclosed in curly brackets,{...},
// Synatx : function FunctionName()
// {
//   // Statements
// }


// function sum(){
//   var a = 10, b = 20;
//   var total = a+b;
//   console.log(total);
// }
//  sum();

// //Interview questions
// what is difference between function parameters vs function Arguments.
//  Ans->*function parameters are the name listed in the function's defination.
//       * function arguments are the real values passed o the function.

// function sum(a,b) //-> function parametrs
// {
//   var total = a+b;
//   console.log(total);
// }
// sum();
// sum(20,40); //-> Function Arguments//
// sum(304,1);

//    &&&& INTERVIEW QUESTIONS &&&&&
//    ? WHY FUNCTION: -> 
//      -You can reuse code: the code once , and use it many Times.
//      -You can use the same code many times with different arguments,
//      - to produce the results. 

//      OR 
//      - A function is a group of reusable code which can be called anywhere 
//      - in your programe. This eliminates the need of wrting the same code 
//      - again and again
//      .............FUNCTION EXPRESION........
//      - "Function expresion simply means 
//      - Create a function and put it into the variable"
// */
// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }
// funExp = sum(10,5);




// //  2) Calliing Function 
// //  3) Function Parameter
// //  4) Function Arguments
// //  5) Function Expresion
// //  6) Function Expresions
// //  7) Return Keyword
// //  8) Anonymous Function






// //  7) Return Keyword
// /** 
//   - When javascript reaches a return statement, 
//   The function will Stop Executing.

//   Function often computes a return value.
//   The return value is "returned" back to the "Caller"


// // **/
// // function sum(a,b){
// //  return  total = a+b;
// // }
// // var funExp = sum(5,25);
// //  console.log('the total sum value is:' + funExp);

//  /* ******Anonymous Function 
//  - A Fuction expresion os similar to and has the same syntax.
//  - as a function declartion one can define "Named"
//  - function expresion (where the same name of the expresion might
//    be used in the call stack for example)
//  - or "anonymous" Function expresions. 

//  */
// var funExp = function(a,b){
//   return total = a*b;
// }
// var sum = funExp(12,5);
// var sum1 = funExp(20,15);
// console.log(sum > sum1 );

// .....WELCOME TO ECMASCRIPT 1997.....//
//      ECMAScript 2015/ ES6
/*
- Let and Const 
- Destructing
- Template String
- Default Argument 
- Rest Operator
- OBJCET PROPERTIES
- ARROW FUNCTION'
- SPRED OPERATORS
*/
// FEATURES OF ECMASCRIPT 2015 ALSO KNOWN AS ES6
     // LET  vs CONST vs VAR
      //  VAR => Function Scope
      //  Let and Const => Block Scope



      // var myName ='Amresh Kumar';
      // console.log(myName);
      // myName = 'Amresh Kumar Sharma';
      // console.log(myName);

// let myName ='Amresh Kumar';
// console.log(myName);
// myName = 'Amresh Kumar Sharma';
// console.log(myName);

// const myName ='Amresh Kumar';
// console.log(myName);
// myName = 'Amresh Kumar Sharma';
// console.log(myName);


// function biodata(){
//   const myFirstName = "Amresh";
//   console.log(myFirstName);

//   if(true){
//     let myLastName = "Kumar";
//     console.log('inner'+ myLastName);
//     console.log('inner'+ myFirstName);
//   }
//   console.log('innerOuter' + myLastName);
// }
// //  console.log(myFirstName);
// biodata();

// Template Literal (Template String)
// JavaScript programe to print table of given number (8)?
// for(let num=1; num <= 10;num++)
// {
//   let table =8;
//   console.log("the table is :"+table*num) ;
// }

// // Example of Template Literal ->
// for (let num=1;num<= 10; num++)
// {
//   let table=8;
//   console.log(`${table} * ${num} = ${table *num}`);
// }

// Default Parameters 
// Default function parameters allow named parameters to be 
// initilized with default values if no value or undefined is passed .
// function mult(a,b)
// {
// return a*b;
// }
// console.log(mult(2,4));

// FAT ARROW FUNCTION
// A Normal way of writing function

// function sum(){
//   let a=5; b=6;
//   let sum=a+b;
//   return `the sum of the two number is ${sum}`;

// }
// console.log (sum());
// How to convert in into Fat Arrow Function

// const sum = () =>{

//   let a=3;b =5;
//   let sum=a+b;
//   return `the sum of the two number is  ${sum}`;
// }
// console.log (sum());

// const sum= () => `the sum of the two number is ${(a=5)+ (b=5)}`;
// console.log(sum());

/******ARRAY IN JAVASCRIPT **
 *  when we use var, we can stored value on value at a Time.
 * /ex/- var
 *  when we fell like storing only one value at time.
 * instead of var, we will use an Array.
 * In javascript, we have an Array class, and array are the prototype of this class.
 * 
 * Example:
 * ..............What We Will Do 
 *    Traversal of an Array
 *    Searching and Filter in an Array
 *    How to Sort and Compare an Array
 *    How to Insert, and ,Replace and Delete Elements in Array(Crud).
 *    Map(), Reduce(), Fiter().
*/

//  var myFriends =['Amresh', 'Kumar','Sharma','Arjun','101'];
//  console.log(myFriends); 

// var myFriends = new Array;
// var myFriends = ["Amresh",22,"Kumar","Sharma", "Thakur",true,53];
// console.log(myFriends);
            //*    Traversal of an Array

// Navigate through an array
// If we want to get the single data at a time and also 
// if we want to change the data
// if we want to check the lenght of data.

// var myFriends = ['Amresh','Kumar', 'Sharma','Anuj' ];
// console.log(myFriends[myFriends.length-1]);
// console.log(myFriends.length);
// We use for loop to Navigate 
      //  var myFriends = ['Amresh','mukesh','Ranjeet','Vinay'];
      //  for(var i=0;i<myFriends.length;i++)
      //  {
      //        console.log(myFriends[i]);
      //  }
// // After ES6(Ecma Script 6) we have for..in and for..of loop too
// var myFriends =['Amresh','Mukesh', 'Ranjeet', 'Vinay'];
// for(let elements in myFriends){
//       console.log(elements);
// }

// for( let elements of myFriends){
//       console.log(elements);
// }
      // Array.prototype.forEach()
      //Calls a function for elements in Array.
      // var myFriends =['Amresh', 'Mukesh', 'Ranjeet', 'Vinay'];
      // myFriends.forEach(function(element,index,array){
      //       console.log(element + " index: " +index+ "" +array);
      // });

      // myFriends.forEach((element,index,array)=>{
      //       console.log(element + " index: "+ index + " " +array);
      // });
// *****Searching in Filter In Array ***
// Array.proptype.indexOf()
// Returns the First(least) index of an elements within the array equal
//to an elements,or -1 if none is found.It Search the Elements from 
// 0th Index number

// var myFriends =["Amresh" , "Mukesh" , "Ranjeet" , "Vinay"];

// Not complete bacuse video is Auto Paused.

//****  How to Insert, and ,Replace and Delete Elements in Array(Crud).    */
// Array.prototype.push()
// The push() method adds one or more elements to the end of
// an array and returns the new length of the array.
// const animals =['pigeon', 'Goat', 'Sheep', 'Cock', 'Fish'];
// animals.push('chicken');
// console.log(animals);

// Array .prototype.unshift(
//  the unshift() method adds one or more elemenst to the 
// begining of an array and returns the new length of the array.
// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.unshift('chcken');
// console.log(count);
// console.log(animals);

// 2nd Example 
// const myNumbers = [1,2,3,5];
// myNumbers.unshift(4,6);
// console.log(myNumbers);

// Array.prototype.pop()
// the pop() method removes the last elements from an array and retruns 
//the elements.This method changes the length of the array.
// const plants =['patato', 'cauliflower', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// const plants =['patato', 'cauliflower', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

                  // Challange Time
// Adds and/or removes elements from an Array.
// 1: Add Dec at the end of an array ?
// 2: What is the return value of splice method?
// 3: update march to march (update)
// 4: Delete june from an Array?

//const months = ['jan', 'march', 'April', 'june', 'july'];
// solution :1
//  const newMonth = months.splice(months.length,5,0,"Dec");
// console.log(months);

// solution: 2;
//console.log(newMonth);

// solution 3:
// const months = ['jan', 'march', 'April', 'june', 'july'];
// const indexOfMonth = months.indexOf('march');
// if(indexOfMonth != -1){
//    const updatefMonth = months.splice(indexOfMonth,1,'march');
//    console.log(months);
// }else{
//       console.log('No such data Found');

//    }


// const updateMonth = months.splice(1,1,'March');
// console.log(months);

/* Array Subsection 4-> MAP and Reduce Method*/

// Array.prototype.map()
// Let newArray = arr.map(callback(currentValue[, index[, array]]))
// return element for newArray , After executing something
// }[,thisArg]);
// Returns a new array contaning the results of calling 
// function on every elements in this array.
// const array1 = [1,4,9,16,25];
//It returns new Array without mutating the orignal array

// const array1 = [1, 4, 9, 16, 25];
//num > 9

// let newArr = array1.map((curElem,index,arr)=>{
//       return curElem > 10;

// })
// console.log(array1);
// console.log(newArr);
// const array1 = [1, 4, 9, 16, 25];

// let newArr = array1.map((curElm, index, arr) => {
//       return `index no = ${index} and value is ${curElm} belong to ${arr}`
// })
// console.log(newArr);


// let newArrfor = array1.forEach((curElm, index,arr)=>{
//       return `index no = ${index} and the value is ${curElm} belong to ${arr}`
// })
// console.log(newArrfor);

// Challange Time 
// 1: Find the square root of each element in array?
// 2: multiply each element by 2 and return only those
// elements which are greater then 10?

// Sol: 1.
// let arr = [25, 36, 49, 64,81];
// let arrSqr = arr.map((curElem)=> {
//  return Math.sqrt(curElem);
// })
// console.log(arrSqr);

// Sol: 2.
// let arr = [2,3,4,5,6,8];
// let arr2  = arr.map((curElm) => {
//       return curElm * 2;

// }).filter((curElm) => {
//       return (curElm) > 10;
// })
// console.log(arr2);
// @@@@ Reduce Method @@@@
// Flatten an array means to convert the 3d or 2d array into a single dimenional Array.
//The Reduce() method executes a reducer function(that you provide) 
// on each elements of the array, resulting in a single output value.
//....................................
// The reducer function takes four arguments
// 1: Accumulator
// 2: Current Value
// 3: Current Index
// 4: Source Array

// let arr = [5,3,5];

// let sum = arr.reduec((accumulator, curElm, index, arr) => {

// })
// console.log("I");
// setTimeout(()=>{
//      console.log("love")
// });
// console.log("javascript!");

const numbe;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}