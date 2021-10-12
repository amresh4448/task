// // // let helloWorld = "Hello World";
// // // console.log(helloWorld);
// // //1:- Input Dictionary will have at least & Mon Sun
// // function solution()({

// //    array = {'2020-01-01':4,'2020':4, '2020-01-08':2};


// // )};
// var num={'2020-01-01':4,'2020-01-02':'4,2020-01-03':6,'2020-01-04':8, '2020-01-05':2, 
// }

// const months = ['2020-01-01' '2020-01-02':, '2020-01-03':6, '2020-01-04', '2020-01-05', '2020-01-07', 
// '2020-01-08'];
 
// const newMonth = months.splice(months.length,5,0,"Dec");
// const months = ['jan', 'march', 'April', 'june', 'july'];
// solution :1
//  const newMonth = months.splice(months.length,5,0,"Dec");
// console.log(months);
// const months = ['jan', 'march', 'April', 'june', 'july'];
// solution :1
//  const newMonth = months.splice(months.length,5,0,"Dec");
// console.log(months);
// const months = ['jan', 'march', 'April', 'june', 'july'];
// //solution :1
//   const newMonth = months.splice(months.length,5,0,"Dec");
//  console.log(months);
// console.log(months);

// Solve:1, // Input Dictionary will have at least Mon. & Sun.

//  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'fri', 'sat'];
//  const newDay = days.splice(days.length,0,0);
// // days.push('Sun','Mon');
// console.log('Sun', 'Mon');

// Sol 2: // Input Dictionary Key is a string within the,
// range[1970-01-01..2100-01-01]; 

const range=['1970-01-01','1980-01-01','1980-01-01', '2100-01-01'];
const newRange = range.splice(range.length,0,0);
console.log('1970-01-01'  ,'....',  '2100-01-01');

// sol 3://
(function() {
  var days = ['-1,000,000','....',1000,000'];
  Date.prototype.getDayName = function() {
    return days[ this.getDay() ];
}
var day = now.getDayName(days);

)}






















