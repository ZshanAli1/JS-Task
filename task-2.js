// Question 1
// function toyota() {
//   console.log("i am driving toyota");
// }
// function honda() {
//   console.log("i am driving honda");
// }
// let car = (company) => {};

// car(toyota());

// Question 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach((each) => {
//   for (let i = 1; i <= arr.length; i++) {
//     console.log(`${each} X ${i} = ${each * i}`);
//   }
// });

// let date = new date();

// Question 3
// let product = [
//   {
//     name: "bread",
//     price: 150,
//   },
//   {
//     name: "cake",
//     price: 170,
//   },
//   {
//     name: "oil",
//     price: 180,
//   },
//   {
//     name: "sweets",
//     price: 120,
//   },
// ];

// Question 4
// let shapes = [
//   {
//     shape: "triangle",
//     sides: 3,
//   },
//   {
//     shape: "triangle",
//     sides: 3,
//   },
//   {
//     shape: "triangle",
//     sides: 2,
//   },
//   {
//     shape: "triangle",
//     sides: 3,
//   },
// ];
// let side = shapes[0].sides;
// shapes.forEach((sh) => {
//   if (sh.sides !== side) {
//     return console.log(false);
//   } else {
//     return console.log(true);
//   }
// });

// question 5
// let person = {
//   name: "Zeeshan",
//   age: 21,
//   gender: "Male",
//   address: {
//     city: "Multan",
//     country: "Pakistan",
//   },
//   describe: (person) => {
//     console.log(
//       `my name is ${person.name} and i am ${person.age} years old i am ${person.gender} and i live in ${person.address.city} ${person.address.country}`
//     );
//   },
// };
// person.describe(person);

// Qusetion 6
// let arrNum = [5, 7, 4, 3, 9, 2, 1];
// console.log(arrNum.sort());

// Question 7
// let user = [
//   {
//     name: "Faizan",
//     age: 24,
//   },
//   {
//     name: "Ayesha",
//     age: 26,
//   },
//   {
//     name: "Ali",
//     age: 23,
//   },
// ];

// Question 8
// let strArray = ["zeeshan", "Ali", "Abdulrehman"];
// function lengthgreater8() {
//   for (let j = 0; j < strArray.length; j++) {
//     if (strArray[j].length > 8) return j;
//   }
// }
// console.log(lengthgreater8());

// Question 9
// let numberAr = [3, 5, 6, 8, 9, 50, 75, 90];
// console.log(numberAr.find((Element) => Element > 6));

// Question 10
// console.log(numberAr.slice(0, numberAr.length - 2));

// Question 11
// console.log(numberAr.reverse());

// Question 12
// numberAr.unshift(45);
// console.log(numberAr);

// Qusetion 13
// numberAr.push(25);
// console.log(numberAr);

// Question 14
// numberAr.shift();
// console.log(numberAr);

// Question 15
// numberAr.pop();
// console.log(numberAr);

// Question 16
// let strArray = ["my", "name", "is", "zeeshan"];
// strArray.forEach((element, index) => {
//   console.log(strArray[index].toUpperCase());
// });

// Question 17
// console.log(
//   strArray.some((value, index) => {
//     if (strArray[index].includes("ame")) return true;
//   })
// );

// Question 18
// let result = [];
// result = strArray.concat(numberAr);
// console.log(result);
