// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 50 },
//   { name: "Pencil", price: 5 }
// ];

// let productList = "";

// for (let i = 0; i < products.length; i++) {
//   let product = products[i]
//   if (!productList[product.name]) {
//     productList[product.name] = []
//   }
//   productList += `${product.name} - ${product.price} `;
// }

// console.log(productList);

// const prices = [100, 250, 80, 300, 120];
// let filteredPrices = [];

// for (let i = 0; i < prices.length; i++) {
//   let price = prices[i]
//   if (price > 150) {
//     filteredPrices.push(price)
//   }
// }

// console.log(filteredPrices);

// const scores = [
//   { name: "Ravi", subject: "Math", marks: 90 },
//   { name: "Meena", subject: "Science", marks: 85 },
//   { name: "John", subject: "Math", marks: 78 },
//   { name: "Kavya", subject: "Science", marks: 92 }
// ];

// let subjectMap = {};

// for (let i = 0; i < scores.length; i++) {
//   let item = scores[i];
//   if (!subjectMap[item.subject]) {
//     subjectMap[item.subject] = [];
//   }
//   subjectMap[item.subject].push(item.name);
// }

// console.log(subjectMap);

// const orders = [
//   { customer: "Alice", item: "Shoes" },
//   { customer: "Bob", item: "Shirt" },
//   { customer: "Alice", item: "Hat" },
//   { customer: "Bob", item: "Pants" },
//   { customer: "Charlie", item: "Gloves" }
// ];

// const grouped = {};

// for (let order of orders) {
//   if (!grouped[order.customer]) {
//     grouped[order.customer] = [];
//   }
//   grouped[order.customer].push(order.item);
// }

// for (let name in grouped) {
//   console.log(name + ": " + grouped[name].join(", "));
// }

// const orders = [
//   { customer: "Alice", item: "Shoes" },
//   { customer: "Bob", item: "Shirt" },
//   { customer: "Alice", item: "Hat" },
//   { customer: "Bob", item: "Pants" },
//   { customer: "Charlie", item: "Gloves" },
//   { customer: "Alice", item: "Scarf" }
// ];

// const counts = {};

// for (let order of orders) {
//   if (!counts[order.customer]) {
//     counts[order.customer] = 1;
//   } else {
//     counts[order.customer]++;
//   }
// }

// for (let customer in counts) {
//   console.log(customer + " ordered " + counts[customer] + " items");
// }


// const orders = [
//   { customer: "Alice", item: "Shoes" },
//   { customer: "Bob", item: "Shirt" },
//   { customer: "Alice", item: "Hat" },
//   { customer: "Bob", item: "Pants" },
//   { customer: "Charlie", item: "Gloves" },
//   { customer: "Alice", item: "Scarf" }
// ];

// const report = {};

// for (let order of orders) {

//   if (!report[order.customer]) {
//     report[order.customer] = {
//       count: 1,
//       items: [order.item]
//     };
//   } else {
//     report[order.customer].count++;
//     report[order.customer].items.push(order.item);
//   }
// }

// console.log(report);

// for (let customer in report) {
//   console.log(customer + " (" + report[customer].count + " items): " + report[customer].items.join(", "));
// }

// const orders = [
//   { customer: "Alice", item: "Shoes" },
//   { customer: "Bob", item: "Shirt" },
//   { customer: "Alice", item: "Hat" },
//   { customer: "Bob", item: "Pants" },
//   { customer: "Charlie", item: "Gloves" },
//   { customer: "Alice", item: "Scarf" },
//   { customer: "David", item: "Shoes" }
// ];

// const report = {};

// for (let order of orders) {
//   if (!report[order.customer]) {
//     report[order.customer] = {
//       count: 1,
//       items: [order.item]
//     };
//   } else {
//     report[order.customer].count++;
//     report[order.customer].items.push(order.item);
//   }
// }


// for (let customer in report) {

//   if (report[customer].count > 1)  {
//     console.log(customer + " (" + report[customer].count + " items): " + report[customer].items.join(", "));
// } 
// }

// const orders = [
//   { customer: "Alice", item: "Scarf" },
//   { customer: "Bob", item: "Pants" },
//   { customer: "Alice", item: "Shoes" },
//   { customer: "Bob", item: "Shirt" },
//   { customer: "Charlie", item: "Gloves" },
//   { customer: "Alice", item: "Hat" }
// ];

// const report = {};

// for (let order of orders) {
//   if (!report[order.customer]) {
//     report[order.customer] = {
//       count: 1,
//       items: [order.item]
//     };
//   } else {
//     report[order.customer].count++;
//     report[order.customer].items.push(order.item);
//   }
// }

// for (let customer in report) {
//   report[customer].items.sort();
//   console.log(customer + " (" + report[customer].count + " items): " + report[customer].items.join(", "));
// }


// const orders = [
//   { customer: "Alice", item: "Scarf" },
//   { customer: "Bob", item: "Pants" },
//   { customer: "Alice", item: "Shoes" },
//   { customer: "Bob", item: "Shirt" },
//   { customer: "Charlie", item: "Gloves" },
//   { customer: "Alice", item: "Hat" }
// ];

// const report = {};

// for (let order of orders) {
//   if (!report[order.customer]) {
//     report[order.customer] = {
//       count: 1,
//       items: [order.item]
//     };
//   } else {
//     report[order.customer].count++;
//     report[order.customer].items.push(order.item);
//   }
// }

// // Now trying to sort customers by count:
// const sortedCustomers = Object.entries(report).sort((a, b) => {
//   return a[1].count - b[1].count;
// });

// console.log(sortedCustomers);


// for (let [customer, data] of sortedCustomers) {
//   data.items.sort();
//   console.log(customer + " (" + data.count + " items): " + data.items.join(", "));
// }


// const str = "12345";
// const str1 = char(str);

// let outPutArr = Array.from(str1)
// console.log(outPutArr);

// const a = Array.of(5);
// const b = Array(5);

// console.log(a); // ?
// console.log(b); // ?

// const a = Array.of(10);

// let finalArray = [...a,20,30]

//  console.log(finalArray);
 
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// let finalObj = {...obj1,...obj2}

// console.log(finalObj);


// let {name, location} = user;


// console.log(users); 
// console.log(country); 



// const user = {
//     name: "Pavan",
//     age: 25,
//     location: "India"
// };
// {
//     let { name, location} = user;
//     console.log(name);
// }

// {
//     const users = {
//         name: "Pavan",
//         age: 25,
//         location: "India"
//     };
//     let { name, location} = users;
//     console.log(location);
// }

// const user = { name: "Pavan", age: 25, location: "India" };
// const { nam = "pav1" , ...rest } = user;
// console.log(rest); // { age: 25, location: "India" }

// const user = {
//   name: "Pavan",
//   age: 25,
//   address: {
//     location:{
//         city: "Bangalore",
//         street : "labon street"
//     },
//     pin: 560001
//   }
// };

// const {
//   name: fullName = "Unknown",
//   address: {
//     location: {
//       city,
//       street
//     },
//     pin
//   },
//   ...rest
// } = user;

// console.log(fullName); // "Pavan"
// console.log(city);     // "Bangalore"
// console.log(street);   // "labon street"
// console.log(rest);     // { age: 25 }

 
// const employee = {
//   id: 101,
//   department: "Engineering"
// };

// const {id : empId , department : empRole = "Developer" } = employee

// console.log(empId);
// console.log(empRole);

// const config = {
//   appName: "WeatherX",
//   version: "1.0.0",
//   author: {
//     name: "Pavan"
//     // email is missing
//   },
//   debug: true
// };

// let {
//     appName : application,
//     author:{
//         name : authorName,
//         email : authorEmail = "not@provided.com"
//     },
//     ...rest
// } = config;

// console.log(application);
// console.log(authorName);
// console.log(authorEmail);
// console.log(rest);


// function greet({ name, age = 18 }) {
// //   const {name = "Pavan", age : Age = 16} = greet;
//   console.log(name);
//   console.log(Age);
//   return
// }

// function printDetails({ name = "default-Pavan" , age = 18 }) {
//     console.log(name);
//     console.log(age);
// }

// printDetails({ name: "Nisha", age: 28 });

// function greetUser({ name = "Guest", mood = "🙂" }) {
//     console.log(name);
//     console.log(mood);
// }

// greetUser({ name: "Amit" });

// function showInfo({ id: userId, active: isActive }) {
//     console.log(userId);
//     console.log(isActive);
// }

// showInfo({ id: 501, active: true });

// function printAddress({ name, address: { city, pin } }) {
// console.log(name);
// console.log(city);
// console.log(pin);

// }

// printAddress({
//   name: "Priya",
//   address: { city: "Delhi", pin: 110001 }
// });


// function getProfile({ username, info: { email = "not@found.com" } }) {
// console.log(username);
// console.log(email);

// }

// getProfile({
//   username: "devUser",
//   info: {}
// });


// function debugConfig({
//   env,
//   server: { host, port },
//   ...rest
// }) {
//   console.log(env);
//   console.log(host);
//   console.log(port);
//   console.log(rest);
// }

// debugConfig({
//   env: "production",
//   server: { host: "localhost", port: 8080 },
//   debug: true,
//   retries: 3
// });

// const data = [10, 20, 30];
// const [a, b, c] = data;

// console.log(a);
// console.log(b);
// console.log(c);

// const response = ["OK"];
// const [status = "OK", code = 200] = response;
// console.log(status);
// console.log(code);

// const info = ["Admin", [100, 200]];
// const [ role, [min, max]] = info;
// console.log(role);
// console.log(min);
// console.log(max);


// let x = "hello", y = "world";

// let temp = x;
// x = y;
// y = temp

// console.log(x); // should log: "world"
// console.log(y); // should log: "hello"

// let x = "hello";
// let y = "world";


// [x ,y] = [y , x];

// console.log(x); 
// console.log(y); 

// const numbers = [100, 200, 300, 400, 500];

// [first, second, ...remaining] = numbers;


// console.log(first);     
// console.log(second);   
// console.log(remaining); 

// const nav = ["menu", ["Home", "About", "Contact"]];

// let [main, [firstLink, secondLink,]] = nav;

// console.log(main);       
// console.log(firstLink);  
// console.log(secondLink); 

// const userProfile = {
//   username: "codeMaster",
//   skills: ["JavaScript"]
// };

// let {
//   username,
//   skills :  [firstSkill, secondSkill = "NoSkill"]  
// } = userProfile;



// console.log(username);     // "codeMaster"
// console.log(firstSkill);   // "JavaScript"
// console.log(secondSkill);  // "NoSkill"

// const settings = {
//   theme: "dark",
//   preferences: {
//     editor: {
//       language: "JavaScript"
//       // fontSize is missing
//     }
//   },
//   user: {
//     contact: {
//       // email is missing
//     }
//   }
// };

// let {
//   theme,
//   preferences: {
//     editor: {
//       language,
//       fontSize = "16px"
//     }
//   },
//   user: {
//     contact: {
//       email = "no-email@default.com"
//     }
//   }
// } = settings;



// console.log(theme);     // "dark"
// console.log(fontSize);  // "16px"
// console.log(email);     // "no-email@default.com"

// const post = {
//   title: "Destructuring Masterclass",
//   author: { name: "Pavan" }
// };
// let {
//   title,
//   author : { name : author}
// } = post;

// console.log(title);
// console.log(author);


// const sizes = [42];

// let [shoeSize , shirtSize = 38] = sizes

// console.log(shoeSize);
// console.log(shirtSize);

// const config = {
//   mode: "auto",
//   features: {
//     darkMode: true
//   }
// };

// let {
//   mode,
//   features: {
//     darkMode,
// },
// debug = "false"
// } = config;


// console.log(mode);
// console.log(darkMode);
// console.log(debug);

// const numbers = [10, 20, 30, 40, 50];

// const [first, ...others] = numbers;

// console.log(first);    // ?
// console.log(others);   // ?

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const merged = [...arr1, ...arr2];

// console.log(merged);    // ?

// const input = [5, 10, 15];

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...input));

// const [first, ...rest] = [10, 20, 30, 40];

// console.log(first);
// console.log(rest);

// function printArgs(...args) {
//   console.log(args);
// }

// printArgs("a", "b", "c");


// const defaults = { theme: "light", debug: false };
// const userSettings = { debug: true };

// const settings = { ...defaults, ...userSettings };

// console.log(settings);

// const base = {
//   app: "ChatApp",
//   version: "2.0",
//   settings: {
//     theme: "dark"
//   }
// };

// const update = {
//   ...base,
//   version: "2.1",
//   settings: {
//     ...base.settings,
//     theme: "light",
//     fontSize: "14px"
//   }
// };

// const update = {
//   ...base,
//   version: "2.1",
//   settings: {
//     theme: "light",
//     fontSize: "14px"
//   }
// };


// console.log(update);

// const defaults = {
//   debug: false,
//   paths: {
//     home: "/",
//     about: "/about"
//   }
// };

// const config = {
//   ...defaults,
//   paths: {
//     ...defaults.paths,
//     contact: "/contact"
//   }
// };

// console.log(config);

// const settings = {
//   api: "/getData",
//   timeout: 3000
// };

// const { api: endpoint, timeout: waitTime, message = "Please try again" } = settings;

// console.log(endpoint); // ?
// console.log(waitTime); // ?
// console.log(message); // ?


// const user = { name: "Ravi", age: 30 };
// const { name, age } = user;
// console.log(name, age);

// const user = { name: "Asha" };
// const { name, age = 25 } = user;
// console.log(name, age);

// const person = { name: "Kiran", city: "Mumbai" };
// const { name: fullName = "Raj", city } = person;
// const name = "raj";
// console.log(fullName, city);

// function showUser({ username = "anonymous" }) {
//   console.log(username);
// }

// showUser({ username: "rahul" });


// function greet({ name, age = 30 }) {
//   console.log(name, age);
// }

// greet({ name: "Meena" });


// function welcome({ city = "Delhi" } = {}) {
//   console.log(city);
// }

// welcome();

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4));

// const arr = Array.from("JS");
// console.log(arr);

// const doubled = Array.from([2, 4, 6], x => x * 2);
// console.log(doubled);

// console.log(Array.of(3));    // ?
// console.log(Array(3));       // ?

// const result = Array.from("123", x => parseInt(x) + 1);
// console.log(result);

// console.log(Array.of([1, 2], 3, "hi", { x: 10 }));

// const a = Array(2, 3);
// const b = Array(2);
// console.log(a.length, b.length);

// const nested = [1, [2, [3, [4]]]];
// console.log(Array.isArray(nested[1]));
// console.log(Array.isArray(nested[1][1]));
// console.log(Array.isArray(nested[1][1][1]));

// const str = "abc";
// const nums = [1, 2];
// const combined = [...str, ...nums];
// console.log(combined);

// double = n => n * 2;
// console.log(double(1,2,3));


// greet = name => "Hello, " + name;
// console.log(greet("Pavan"));


// getUser = ( name , age ) => ({name: name, age: age})
// console.log(getUser("Asha", 25 ));




// const sayHi = () => "Hi There";
// console.log(sayHi());

// const square = x => x * 2;
// console.log(square(2));

// const greetUser = (name,age) => ({name: name, age: age});
// console.log(greetUser("Pavan",30));

// const triple = n => n * 3
// console.log(triple(1));

// const toPair = ("x","y") => (["x", "y"]);
// console.log(toPair("a","b"));

// const getCity = { name: "Pavan", city: "Mumbai" };

// let { name, city} = getCity;

// let getCityDest = getCity => ({city});
// console.log(getCityDest(city));

// const add = (a,b) => a + b ;
// console.log(add(3,7));


// const Username = "Pavan";
// let getLength = n => n.length;
// console.log(getLength(Username));

// const myArr = ["a", "b", "c"];
// let firstItem = n => n[0];
// console.log(firstItem(myArr));


// let makeUser = (a,b) => ({name: a, age: b });
// console.log(makeUser("Asha",25));



// let myArr = ["hello", "world"];
// let firstArrlength = myArr[0]
// let firstLength = n => n.length;
// console.log(firstLength(firstArrlength));

// let displayUser = ({ name, city }) =>  `${name} from ${city}`;
// console.log(displayUser({ name: "Pavan", city: "Mumbai" }));

// let firstLength = arr => arr[0].length;
// console.log(firstLength(["hello", "world"])); 

// let greetUser = n => "Hello" +" "+ n; 
// console.log(greetUser("Pavan"));

// let isAdult  = age => age >= 18 ?  `"Adult"` : "Minor";
// console.log(isAdult(19));

// let sumAll.reduce(n => ({...n + n}));
// console.log(sumAll(1,2,3));

// const getFullName = ({first,last}) => `${first} ${last}`;
// console.log(getFullName({ first: "Asha", last: "Rao" }))

// let values = [1,2,3];
// multipleDouble = values.map( n => n * 2 );
// console.log(multipleDouble);

// let makeProduct = (n , p) => ({name: n, price: p});
// console.log(makeProduct("pen",10) );

// → { name: "Pen", price: 10 }

// const double = n => n * 2;
// const result = [1, 2, 3].map(double);
// console.log(result);

// const settings = ({ theme = "light", font = "Arial" }) => `${theme} | ${font}`;
// console.log(settings({ font: "Helvetica" }));

// const fn = (a, b) => a + b;
// console.log(fn(1, 2));

// const double = n => n * 2;
// const result = [1, 2, 3].map(double);
// console.log(result);

// const addPrefix = (prefix = "Mr.") => name => `${prefix} ${name}`;
// const greet = addPrefix();
// console.log(greet("Rao"));

// const addSuffix = suffix => name => `${suffix}${name}`;
// const junior = addSuffix(" Jr.");
// console.log(junior("Ravi")); 


// const addPrefixSuffix = prefix => suffix => name => `${prefix}${name}${suffix}`;
// const junior = addPrefixSuffix("Mr.")(".Jr");
// console.log(junior("Pavan")); 

// const getInitials = ({ first = "", last = "" }) => `${first[0]}.${last[0]}.`;
// console.log(getInitials({ first: "Asha"}));

// const createGreeting = (name = "Guest") => `Welcome, ${name}!`;
// console.log(createGreeting());


// const getFirstItem = ([first] = []) => first;
// console.log(getFirstItem(["apple", "banana", "cherry"]));

// const getStatus = ({ online = false } = {}) =>
//   online ? "User is online" : "User is offline";

// console.log(getStatus());

// const getColors = ([primary = "red", secondary = "blue"] = []) => 
//   `Primary: ${primary}, Secondary: ${secondary}`;

// console.log(getColors(["green"]));

// const createUser = ({ name = "Guest", role = "user" } = {}) => 
//   `${name} has the role of ${role}`;

// console.log(createUser());

// const saySomething = (msg = "Hi") => msg.toUpperCase();
// console.log(saySomething());

// const transform = (arr => arr.map((v, i, a) => a[(a.length - 1) - i])) ([10, 20, 30]);
// console.log(transform);

// const getValue = ((obj, key) => ({ [key]: val } = obj, val)) ({ x: 42, y: 99 }, 'y');
// console.log(getValue);

// let p, q;

// const answer = (
//   p = 2,
//   q = p ** 3,
//   { p, q }
// );

// console.log(answer);

// What are the values of: p, q, answer ?

// a = 1
// a = a * 2 ;
// so here a = 2

// a = 2
// console.log(a);
// b = (a *= 5, a + 1)

// console.log(a , b);

// console.log(a);

// const ref = { a: 5 };

// function change(obj) {
//   obj.a += 10;
// }

// change(ref);
// console.log(ref);
// console.log(ref.a);

// const secretKey = Symbol('secret');

// const locker = {
//   [secretKey]: 'Hidden Treasure 💰',
//   owner: 'Pavan',
//   location: 'Vault Room'
// };

// console.log(locker[secretKey]);
// console.log(Object.keys(locker));
// console.log(Object.getOwnPropertySymbols(locker));

//  shows all the ;list in the object

// 1️⃣ How would you access the secret treasure stored in `locker`? yes

// 2️⃣ Will this loop show the secret? nope

// for (let [key] in locker) {
//   console.log(key);
// }

// for (let key of Reflect.ownKeys(locker)) {
//   console.log(key, '→', locker[key]);
// }

// const LOG = Symbol('log');

// const vault = {
//   owner: 'Pavan',
//   [LOG]: function () {
//     return 'Access granted ✅';
//   }
// };
// console.log(vault[LOG]());

// const settingsKey = Symbol('settings');

// const app = {
//   name: 'MyApp',
//   version: '1.0',
//   [settingsKey]: {
//     theme: 'dark',
//     debug: true
//   }
// };

// for (let key in app) {
//   console.log(app[settingsKey].theme, '&',  app[settingsKey]);
// }

// const counter = Symbol('accessCounter');

// const secureBox = {
//   data: '🔐 confidential',
//   [counter]: 0,
//   access() {
//     this[counter]++;
//     return this.data;
//   }
// };

// for (const key in secureBox) {
//     console.log((secureBox.access(), secureBox), (1000));
//     console.log((secureBox.access(), secureBox), (1500));
// }

// console.log(secureBox.access());
// console.log(secureBox);

// ❓ Call `access()` three times
// ❓ How do you print how many times it was accessed (using the symbol)?


// Using comma operator:
// const box = {
//   value: 0,
//   increase() { this.value++; }
// };

// console.log((box.increase(), box.value)); // Runs increase, returns box

// // Using setTimeout:
// setTimeout(() => {
//   box.increase();
//   console.log('After delay:', box);
// }, 1000);

// const key = 'fruit';
// const basket1 = { fruit: '🍎', vegetable: '🥕' };
// const basket = { fruit: "Apple", vegetable: '🥕' };

// const result = ({ [key]: item } = basket, item);

// console.log(result);

// const user = { name: 'Pavan', age: 28 };
// const prop = 'age';

// const output = ({ [prop]: value } = user, value * 2);

// console.log(output);

// const symKey = Symbol('topSecret');
// const vault = { [symKey]: '🗝️ Key Inside', code: 1234 };

// const result = ({ [symKey]: secret } = vault, secret);

// console.log(result);

// const key = 'mode';
// const config = { mode: 'dark', version: 1.2 };

// const final = ({ [key]: m } = config, { m });

// console.log(final);

// const symKey = Symbol('topSecret');
// const vault = { [symKey]: '🗝️ Key Inside', code: 1234 };
// [symKey]: '🗝️ Key Inside' becomes { Symbol('topSecret'): '🗝️ Key Inside', code: 1234 };

// const s1 = Symbol('alpha');
// const s2 = Symbol('alpha');

// const box = {
//   [s1]: 101,
//   [s2]: 202,
//   visible: true
// };

// const result = ({ [s2]: val } = box, val + box[s1]);

// console.log(result);

// const dynamicKey = 'lang';
// const input = { lang: 'JAVASCRIPT', level: '🔥🔥' };

// const getLang = (obj) => ({ [dynamicKey]: val } = obj, val + ' MASTERED');

// const result = getLang(input);

// console.log(result);


// const sym = Symbol('deepSecret');

// const nested = {
//   info: {
//     [sym]: '🔍 Hidden Layer'
//   },
//   tag: 'level1'
// };

// const result = (({ info: { [sym]: value } }) => value)(nested);

// console.log(result);

// const sym = Symbol('deepSecret');

// const nested = {
//   info: {
//     [sym]: '🔍 Hidden Layer'
//   },
//   tag: 'level1'
// };

// // Step 1: Destructure manually
// const {
//   info: {
//     [sym]: value
//   }
// } = nested;

// // Step 2: Assign result
// // const result = value;

// console.log(value); // 🔍 Hidden Layer


// const symKey = Symbol('special');

// const config = {
//   user: {
//     name: 'Pavan',
//     preferences: [
//       'dark mode',
//       { [symKey]: '🔐 Encrypted Setting' }
//     ]
//   }
// };

// // 🔍 Destructure to extract the Symbol value from the array inside config.user.preferences

// const result = (() => {
//   const {
//     user: {
//       preferences: [ mode, { [symKey]: secret }]
//     }
//   } = config;
//   return secret;
// })();

// console.log(result);

// const id = Symbol('id');

// const database = {
//   entries: [
//     {
//       user: 'Alice',
//       meta: { [id]: 'UID-007' }
//     },
//     {
//       user: 'Bob',
//       meta: { [id]: 'UID-999' }
//     }
//   ]
// };

// // Extract the ID of Bob using destructuring + comma operator

// const result = (
//   { entries: [ , { meta: { [id]: uid } } ] } = database,
//   uid
// );

// console.log(result);


// const a = Array(3);
// const b = Array.of(3);

// console.log(a.length, b.length);

// const [x = 1, y = 2] = [10];
// console.log(x, y);

// const val = typeof [] === 'object' ? 'Array-like' : 'Not an array';
// console.log(val);

// function show({ author1 = "Key Not Found"}) {
//   console.log(author1);
// }

// const book = { title: '1984', author: 'Orwell' };
// show(book);

// const obj = { a: 1, b: 2, c: 3 };
// const { ak, ...rest } = obj;
// console.log(rest);

// const user = { name: 'Pavan', role: 'User' };
// const updated = { ...user, role: 'Admin' };
// console.log(updated);

// const obj = {
//   value: 42,
//   getValue: () => this.value
// };

// console.log(obj.getValue());

// const test = () => {
//   console.log(arguments);
// };

// test(1, 2, 3);

// const val = 0;
// console.log(val || 'or', val ?? 'nullish');

// this is simple like in vaklue or "or" its or and other one is coalisoans operator like it will take any value but null or undefined when compared

// const user = { name: 'Pavan' };
// const { name, role = 'guest' } = user;

// console.log(name, role);


// const values = [1, 2, 3, 4];
// const [first, ...rest] = values;

// console.log(first, rest);

// function sum(x, y, z) {
//   return x + y + z;
// }

// const nums = [1, 2, 3,6,5];
// console.log(sum(...nums));

// const data = { user: { name: 'Pavan' } };
// console.log(data.user?.name);
// data.user ? data.user.name : undefined
// simple and powerfull great

// let val;

// console.log(val || 100);
// console.log(val ?? 100);
// console.log(val || 100, val ?? 100);

// const name = 'Pavan';
// const result = name && 'Hello ' + name;
// console.log(result);
// this is short-circuting techinic lets see it later

// const msg = null || 'Default' || undefined ;
// console.log(msg);
// this is shortcircuiting with or condition

