// Question 1
let str = "       Hello world!                      ";
let flag = str.includes("world");
if (flag) {
  console.log("Exists");
}
// Question 2
console.log(str.trim());
// Question 3
console.log(str.replace("orl", "xyz"));

// Question 4
let a = null;
if (a) {
  console.log("a acts like Truthy");
} else {
  console.log("a acts like Falsey");
}

if (!str[100] || !X) {
  console.log("undefined acts like undefined");
  console.log(str[100]);
}

// Question 5
let phoneNumber = "+92-306-1327326";
phoneNumber = phoneNumber.split("-");
let countryCode = phoneNumber[0];
let simCode = phoneNumber[1];
let restNum = phoneNumber[2];
console.log(countryCode);
console.log(simCode);
console.log(restNum);

// Question 6
console.log(str.length);

// Question 7
console.log(str.indexOf("H"));

// Question 8
str = str.trim();
console.log(str.toUpperCase());

// Question 9
if (!a) {
  console.log("Being null a is considered as Falsey");
}

// Question 10
let sentence = "mY NamE iS zEEshan. i Live in Lahore.";
sentence = sentence.toLowerCase();
sentence = sentence.split(". ");
console.log(sentence);
console.log(sentence.length);
let i;
for (i = 0; i < sentence.length; i++) {
  console.log(sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1));
}
