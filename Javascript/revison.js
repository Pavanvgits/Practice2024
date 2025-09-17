// console.log("Pavan")
// console.log("Varun")
// console.log("Software")

// const accountId = 9393141433;
// let accountEmail = "iampavan.blue@gmail.com"
// var accountPasswd = "ABC@123"
// accountCity = "Jaipur"

// accountId = 2;

// accountEmail = "hai@gmail.com"
// accountPasswd = "CBA@321"
// accountCity = "Benguluru"


//  console.table([accountId, accountEmail, accountPasswd, accountCity]);
 
/*
prefer not to use the var 
because of the block scope and fuctional scope
*/

// let name = "Pavan";

// let age = 18;

// let isLoggedIn = false;

// let score = undefined;

// console.log(score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);

// let scoring = 52

// console.log(scoring);
// console.log(typeof (scoring));

// let valueInString = String(scoring);

// console.log(valueInString);
// console.log(typeof (valueInString));

// let value = 3 ;

// let negValue = -value;

// console.log(negValue);
// console.log(typeof (negValue));

// let str1 = "Hello"
// let str2 = " Pavan"
// let str3 = str1 / str2

// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log(1+2+"3");

// console.log(1+2+5*6/2);

// console.log( true );
// console.log( +"" );


// let num1, num2,num3;

// num1 = num2 = num3 = 2+2;

// console.log(num1);
// console.log(num2);
// console.log(num3);

// let gameCounter = 100
// gameCounter++;

// console.log(gameCounter);
 

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 2);
// console.log(2 == 2);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null == 0);

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);


// data types for primitive and non primitive

// String, interger, boolean, null , undefined, symbol,BigInt
// non primitive : Array, Object, function

// const sstring = "abc";

// const nnumber = 123466;

// const bbolean = true;

// const nnull = null ;

// const nundefined = undefined;

// const uunique = Symbol(2);

// console.table([sstring,nnumber,nnull,bbolean,nundefined,uunique]);


// const heros = ["Hanuman","Kalabairav","ShriRam"]

// console.log(heros);

// let Obu = {
//     name : "Pavan",
//     age : 29,
//     gender : "Male",
//     matrial:"",
//     salary : 125411n,
//     isLoggedIn: true,
//     empId: Symbol(125421),
//     Weakness: null,
//     strength: "lordBairavji" 

// }

// const myFunction = function(){
//     console.log(Obu);   
// }

// myFunction();

// function cook() {
//   let spice = "Salt";  // 👨‍🍳 Stored directly on the counter (stack)
//   let ingredients = { 
//     veggie: "Carrot",
//     mirchi  : "chille" 
// };  // 🧱 Stored in storage room (heap)
  
//   console.log(spice);
//   console.log(ingredients.veggie, ingredients.mirchi);
// }
// cook();

// function updateObj(o) {
//   o.value = 100;  // Using the nickname 'o' to change the object
// }

// let obj = { value: 50 }; // Original object
// updateObj(obj);          // Pass reference, 'o' points to the same object
// console.log(obj.value);  // The change is visible here — prints 100


// const stock = 1728;
// const squareRoot = Math.sqrt(stock);
// const cubeRoot = Math.cbrt(stock);
// const result2 = Number.isInteger(squareRoot) && !Number.isInteger(cubeRoot) && squareRoot > 50 && squareRoot % 2 === 0;
// console.log(result2);

// const stock = 1728;

// const cubeRoot = Math.cbrt(stock);

// const result2 = Number.isInteger(cubeRoot) && cubeRoot % 2 === 0 && cubeRoot % 4 !== 0;

// console.log(result2);

// const num = 9801;

// const cubeRoot = Math.cbrt(stock);

// const result2 = Number.isInteger(cubeRoot) && cubeRoot % 2 === 0 && cubeRoot % 4 !== 0;

// console.log(result2);


// const num = 9801;
// const squareRoot = Math.sqrt(num);
// const cubeRoot = Math.cbrt(num);
// const floored1 = Math.round(squareRoot)
// const floored2 = Math.floor(cubeRoot)
// const result2 = Number.isInteger(floored1) && floored2 % 2 !== 0 && floored1 % 5 === 0 && num % 3 > 1;
// console.log(result2);


// const reading = -37.8;
// const convertAbs = Math.abs(reading);
// const convertCeil = Math.ceil(reading);

// const result2 = !Number.isInteger(reading) && convertCeil % 3 !== 0 && convertAbs > 35;
// console.log(result2);

// const v1 = 12.47;
// const v2 = 12.91;
// const v3 = 13.04;

// const convertAvg = (v1+v2+v3) / 3 ;
// const convAvgRound = Math.round(convertAvg);


// const minVal = Math.min(v1, v2, v3);
// const convMinfloored = Math.floor(minVal);


// const maxVal = Math.max(v1, v2, v3);
// const convMaxRoundDen = Math.floor(maxVal);

// const result1 = !Number.isInteger(v1) && !Number.isInteger(v2) && !Number.isInteger(v3) && convAvgRound % 2 !==0 && convMinfloored >= 12 && convMaxRoundDen % 5 === 3;

// console.log(result1);



// const dirtyTitle = "   chinna@king-of@@code   ";

// const trimmed = dirtyTitle.trim();

// const replaced = trimmed.replace(/[^a-zA-Z ]+/g, " ");

// const characterAtLower = replaced.toLowerCase();

// const words = characterAtLower.split(" ").filter(Boolean); // [ 'chinna', 'king', 'of', 'code' ]

// const word1 = words[0].charAt(0).toUpperCase() + words[0].slice(1);
// const word2 = words[1].charAt(0).toUpperCase() + words[1].slice(1);
// const word3 = words[2].charAt(0).toUpperCase() + words[2].slice(1);
// const word4 = words[3].charAt(0).toUpperCase() + words[3].slice(1);

// const finalWord = word1 +" "+ word2 +" "+ word3 +" "+ word4;

// console.log(finalWord);

// // console.log(words);


// | Quantifier | Meaning                   | Example    | Matches                      |
// | ---------- | ------------------------- | ---------- | ---------------------------- |
// | `*`        | 0 or more times           | `/a*/`     | `""`, `"a"`, `"aaaa"`        |
// | `+`        | 1 or more times           | `/a+/`     | `"a"`, `"aaa"`, but not `""` |
// | `?`        | 0 or 1 time (optional)    | `/a?/`     | `""`, `"a"`                  |
// | `{n}`      | Exactly `n` times         | `/a{3}/`   | `"aaa"`                      |
// | `{n,}`     | At least `n` times        | `/a{2,}/`  | `"aa"`, `"aaa"`, `"aaaa"`    |
// | `{n,m}`    | Between `n` and `m` times | `/a{2,4}/` | `"aa"`, `"aaa"`, `"aaaa"`    |

// const messy = "dev@@hub@core@@system@@@admin@super";

// const cleanedText = messy.replace(/@+/g," ");

// console.log(cleanedText);

// const logLine = "INFO::::::User@@@Login----Success::";

// const cleanedText = logLine.replace(/@+/g," ");
// const cleanedText2 = cleanedText.replace(/:+/g,": ");
// const cleanedText3 = cleanedText2.replace(/-+/g, " ");

// console.log(cleanedText3);


// const logLine = "WARN::::::@@Disk@@Space@@@Low@@@on@@@Server---001";

// const cleanedText = logLine.replace(/@+/g," ").replace(/:+/g,": ").replace(/-+/g, " ");

// console.log(cleanedText);

// const users = "pavan###chinna--king@@hero__dev!boss";

// const cleanedText = users.replace(/#+/g,"-").replace(/@+/g,"-").replace(/-+/g,"-").replace(/_+/g,"-").replace(/!+/g,"-").split("-");

// console.log(cleanedText);

// const users = "pavan###chinna--king@@hero__dev!boss";

// const cleanedArray = users
//   .replace(/[#@!_\-]+/g, " ")   // Replace all unwanted characters with space
//   .trim()                       // Remove leading/trailing spaces
//   .split(" ")                   // Split into array
//   .filter(Boolean);             // Remove empty strings (just in case)

// console.log(cleanedArray);

// const systemLog = "!!!ERROR###Code@@500__Server@@Down!!@@Restart--Required";

// const cleanedArray = systemLog
//     .replace(/[!#@_-]+/g," ")
//     .toLowerCase()
//     .trim()
//     .split(" ")
//     .filter(Boolean);

// console.log(cleanedArray);

// const dbLog = "###USER_login@@FAILED!!--Attempt_#2@timestamp::2025-06-17T14:23:00Z";


// const cleanedArray = dbLog
//     .replace(/[^a-zA-Z0-9]+/g," ")
//     .toLowerCase()
//     .trim()
//     .split(" ")
//     .filter(Boolean);

// console.log(cleanedArray);

// const log = "User: JohnDoe | ID: 45321 | Status: Active";
// const name = "Alice"
// let age = 22
// let isStudent = true

// const messyLog = " Hello, my name is Alice. I am 22 years Old, im a Student: true ";
// let regexing = /[w,+]\s[w+]\s[w+]\s[w+]\s[w+]\.\s[w+]\s[w+]\s[d+]\s[w+]\s[w,+]\s[w+]\s[w+]\s[w:+]\s[w+]\s/;
// let cleaned = messyLog.match(regexing)
// console.log(cleaned);

// let quantity = "4";
// let pricePerUnit = "99.5";
// let discount = "10"; // in percent

// let quantityConv = Number(quantity);
// let pricePerUnitConv = Number.parseFloat(pricePerUnit)
// let discountConv = Number(discount)


// let prodValue = (quantityConv * pricePerUnitConv);
// let totalValue = ( prodValue - (prodValue * discountConv) / 100 );

// console.log(`Original: ${prodValue}`);

// console.log(`After 10% discount: ${totalValue}`);

// console.log(typeof quantity);
// console.log(typeof quantityConv);
// console.log(typeof pricePerUnit);
// console.log(typeof pricePerUnitConv);
// console.log(typeof discount);
// console.log(typeof discountConv);

// let totalValue = "500";
// let totalValueConv = Number(totalValue);
// let quantity = "10";
// let quantityConv = Number(quantity);

// let onLinePurchase = quantityConv > 0  && totalValueConv <= 500 ;

// if (onLinePurchase) {
//     console.log("Purchase allowed");
// } else {
//     console.log("Purchase not allowed");
// }

// let billAmount = 463.786;
// let Offer = Math.floor(billAmount)
// let conveniencefee = Math.ceil(billAmount)
// let randomDiscountPercentage = (Math.floor(Math.random() * 15 - 5 + 1)) + 5 

// console.log(`Random Discount of the fees: ${randomDiscountPercentage}%`);

// let billAmount = 463.786;

// let rounded = billAmount.toFixed(2); // String
// let offer = Math.floor(billAmount);
// let convenienceFee = Math.ceil(billAmount);

// let min = 5;
// let max = 15;
// let randomDiscountPercentage = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(`Rounded Bill: ₹${rounded}`);
// console.log(`Floor Offer Price: ₹${offer}`);
// console.log(`Ceil Convenience Fee: ₹${convenienceFee}`);
// console.log(`Random Discount Percentage: ${randomDiscountPercentage}%`);

// let billAmount = 463.786;

// let rounded = billAmount.toFixed(2);
// let rounded1 = Number.parseFloat(rounded)
// let offer = Math.floor(billAmount);
// let convenienceFee = Math.ceil(billAmount);

// let min = 5;
// let max = 15;
// let randomDiscountPercentage = Math.floor(Math.random() * (max - min + 1)) + min;
// let discountAmount = (billAmount * randomDiscountPercentage) / 100;
// let finalAmount1 = billAmount - discountAmount;
// let finalAmount2 = finalAmount1.toFixed(2);
// let finalAmount3 = Number.parseFloat(finalAmount2);


// console.log(`Rounded Bill: ₹${rounded1}`);
// console.log(`Random Discount Percentage: ${randomDiscountPercentage}%`);
// console.log(`Final Amount: ${finalAmount3}`);

// let logLine1 = "User: Rahul, Age: 28, Email: rahul.kumar91@example.com, Status: Active";

// let regex = /User:\s(\w+),\sAge:\s(\d+),\sEmail:\s([\w.-]+@[\w.-]+),\sStatus:\s(\w+)/

// let finalOutput = logLine1.match(regex)

// let outPutIs = { 
//     Name: finalOutput[1],
//     Age: finalOutput[2],
//     Email: finalOutput[3],
//     Status: finalOutput[4]
// }

// console.log(outPutIs);

// let logsLine1 = `
// User: Asha, Age: 31, Email: asha.21@example.com, Status: Active
// User: Vikram, Age: 27, Email: vikram_r@example.com, Status: Inactive
// User: Nisha, Age: 22, Email: nisha98@xyz.co.in, Status: Active
// `;

// let regex = /User:\s(\w+),\sAge:\s(\d+),\sEmail:\s([\w.-]+@[\w.-]+),\sStatus:\s(\w+)/g;

// let finalOutput = [...logsLine1.matchAll(regex)];

// let outPutIs1 = finalOutput.map(outPutIsMatch => ({ 
//     Name: outPutIsMatch[1],
//     Age: outPutIsMatch[2],
//     Email: outPutIsMatch[3],
//     Status: outPutIsMatch[4]
// }));

// let users = outPutIs1;

// let activeUsers = users.filter(
// function (user){
//         return user.Status === "Active"
// });

// console.log(activeUsers);

// let fruits = ["apple", "banana", "mango", "orange"];

// fruits.push("grape");
// fruits.push("kiwi");
// fruits.pop();

// let totalFruits = fruits.length;
// let firstFruit = fruits[0];
// let lastFruit = fruits[fruits.length - 1];

// console.log(`There are Total:${totalFruits}, First fruit is: ${firstFruit}, and Last one is: ${lastFruit}, Thankyou Have a nice day`);
// console.log(fruits);

// let fruits = ["apple", "banana", "mango", "orange"];

// fruits.push("grape");
// fruits.push("kiwi");
// // fruits.pop();

// for (let fruit = 0; fruit < fruits.length; fruit++) {
//     console.log(`Fruit at index ${fruit}: ${fruits[fruit]}`);
// }

// let fruits = ["apple", "banana", "mango", "orange", "grape"];

// for (const items of fruits) {
//     console.log(`Fruit: ${items}`);
// }

// let users = [
//   { name: "Asha", age: 31, status: "Active" },
//   { name: "Vikram", age: 27, status: "Inactive" },
//   { name: "Nisha", age: 22, status: "Active" }
// ];

// for (const user of users) {
//     console.log(`Name: ${user.name}, Age: ${user.age}, Status:${user.status}`);
// }

// let users = [
//   { name: "Asha", age: 31, status: "Active" },
//   { name: "Vikram", age: 27, status: "Inactive" },
//   { name: "Nisha", age: 22, status: "Active" }
// ];

// users.forEach( (user,i) =>  {
//     console.log(`User ${i}: ${user.name} is ${user.age} years old and is ${user.status}`);

// });

// users.forEach(function(user, i) {
//     console.log(`User ${i}: ${user.name} is ${user.age} years old and is ${user.status}`);
// });


// let students = [
//   { name: "Asha", marks: 87 },
//   { name: "Vikram", marks: 74 },
//   { name: "Nisha", marks: 91 },
//   { name: "Ravi", marks: 65 }
// ];

// let totalMarks = 0;

// students.forEach((student,i) => {
//     console.log(`ID of Student is :${i} : ${student.name} Has Scored ${student.marks}`);
//     totalMarks += student.marks;
// });

// let avgTotalMarks = totalMarks / students.length

// console.log(`Total Marks: ${totalMarks}`);
// console.log(`Average Marks: ${avgTotalMarks}`);

// let employees = [
//   { name: "Arun", base: 30000, bonusPercent: 10 },
//   { name: "Bina", base: 45000, bonusPercent: 15 },
//   { name: "Chetan", base: 50000, bonusPercent: 12 },
//   { name: "Daya", base: 28000, bonusPercent: 8 }
// ];

// let totalSalaryPayout = 0;

// employees.forEach((employee,i) => {
//     let finalSalary = (employee.base + (employee.base * employee.bonusPercent) / 100)
//     console.log(`Name of the Employee : ${employee.name}, Current Salary:${employee.base}, Bonus Percentage: ${employee.bonusPercent}%, Final Salary after Bonus: ${finalSalary}`);
//     totalSalaryPayout += finalSalary;
// });

// console.log(`Total Payout Of The Company : ${totalSalaryPayout}`);

// let employees = [
//   { name: "Arun", base: 30000, bonusPercent: 10 },
//   { name: "Bina", base: 45000, bonusPercent: 15 },
//   { name: "Chetan", base: 50000, bonusPercent: 12 },
//   { name: "Daya", base: 28000, bonusPercent: 8 }
// ];

// let totalSalaryPayout = 0;

// let bigBonusAmount = employees.filter( emp => {
//     let bonusAmount = (emp.base * emp.bonusPercent) / 100;
//     return bonusAmount > 5000;
// });

// bigBonusAmount.forEach(emp => {
//     let bonusAmount = (emp.base * emp.bonusPercent) / 100;
//     console.log(`Name: ${emp.name}, Base: ${emp.base}, Bonus %: ${emp.bonusPercent}, Bonus Amount: ${bonusAmount}`);
//     totalSalaryPayout += bonusAmount;
// });

// console.log(`Total Payout Of The Company : ${totalSalaryPayout}`);

// You have a list of customer bills:
// const bills = [
//   { customer: "Ravi", amount: 1200.50, tax: 18, discount: 5 },
//   { customer: "Meena", amount: 2500.00, tax: 18, discount: 10 },
//   { customer: "John", amount: 1800.75, tax: 12, discount: 0 },
// ];


// function generateBillSummary(bills){
// for (const bill of bills) {
//     let Tax_amount1 = (bill.amount * bill.tax) / 100
//     let Tax_amount = Number(Tax_amount1.toFixed(2))
//     let Discount_amount1 = (bill.amount * bill.discount) / 100
//     let Discount_amount = Number(Discount_amount1.toFixed(2))
//     let Final_total1 = (bill.amount + Tax_amount1) - Discount_amount
//     let Final_total = Number(Final_total1.toFixed(2))
  
//   console.log(`Customer: ${bill.customer} | Amount: ₹${bill.amount} | Tax: ₹${Tax_amount} | Discount: ₹${Discount_amount} | Total: ₹${Final_total}`);
  
// }
// }

// generateBillSummary(bills);



