// პროექტი 1 - Saying Hello
// function sayHello() {
//   let name = prompt("what is your name?");
//   console.log(`hello ${name} ,Nice to meet you!`);
// }
// sayHello();

// პროექტი 2 - Counting the Number of Characters - სიმბოლოების რაოდენობის დათვლა
// let answer = prompt("please enter your sentence ");
// console.log(`your sentence consists from  ${answer.length} characters`);

// პროექტი 3 - Printing Quotes - ციტატების ბეჭდვა
// let question1 = prompt("what is the quote? ");
// let question2 = prompt("who said it? ");
// console.log(`${question2} says \"${question1}"`);

// პროექტი 4 - Indoor Voice - ჩუმი ხმა
// let question = prompt("what is your question");
// console.log(question.toLowerCase());

// პროექტი 5 - Playback Speed - საუბრის სიჩქარე
// let question = prompt("what is your question");
// console.log(question.replaceAll(" ", "."));

// პროექტი 6 - Making Faces - სახეების მიღება
// function convert(str) {
//   let changed = str.replaceAll(":)", "🙂").replaceAll(":(", "🙁");
//   return changed;
// }
// function main() {
//   let question = prompt(" please enter your mood");
//   return convert(question);
// }
// console.log(main());

// პროექტი 7 - თამაში Mad Libs
// let noun = prompt("Enter a noun: ");
// let verb = prompt(" Enter a verb: ");
// let adjective = prompt("Enter an adjective: ");
// let adverb = prompt("Enter an adverb: ");
// let adjective2 = prompt("Enter an adjective: ");
// console.log(
//   `do you ${noun} ${verb} ${adjective} ${adverb} ${adjective2} ? thas\`s hilarious`
// );

// პროექტი 10 - ქულების გამომთვლელი
// let score = Number(prompt("please enter yout grade "));
// if (score > 90 && score <= 100) {
//   console.log(`congratulations, you score is ${score} and your grade is A  `);
// } else if (score > 80 && score < 90) {
//   console.log(`congratulations you score is ${score} and your grade is B`);
// } else if (score > 70 && score <= 80) {
//   console.log(`congratulations your score is ${score} and your grade is c `);
// } else if (score > 60 && score <= 70) {
//   console.log(`congratulations your score is ${score} and your gradee is d`);
// } else if (score > 0 && score <= 59) {
//   console.log(
//     `unfortunately you failes, your score is ${score} and your grade is F`
//   );
// } else {
//   console.log("please enter correct score");
// }

// პროექტი 11 - Simple Math - მარტივი მათემატიკა
// let firstNumber = Math. floor(Number(prompt("What is the first number? ")))
// let secondNumber =Math. floor( Number(prompt(" What is the second number? ")))
// console.log(firstNumber + secondNumber)
// console.log(firstNumber - secondNumber)
// console.log(firstNumber * secondNumber)
// console.log(Math. floor(firstNumber / secondNumber))

// პროექტი 12 - Einstein - აინშტაინი

// let lightSpeed = 300000000;
// let weight = Number(prompt('please enter your weight'));
// let answer = lightSpeed * weight
// console.log(`this is your answer ${answer}`)

// პროექტი 13 - Tip Calculator - "ჩაის" კალკულატორი

// let price = prompt("please enter your expences ")
// let tip = prompt("please enter your tip ")
// let iconRemoved =Math.floor(price.replaceAll("$",""))
//       let removed = tip.replaceAll("$","")
//     let diveded = Number(removed) / 100
//     let tipAmount =Number(iconRemoved) * diveded
//     console.log(`leave ${tipAmount} $`)

// პროექტი 14 - Retirement Calculator - საპენსიო კალკულატორი

// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
//  let userAge =Number(prompt("please enter your age "))    //asaki
//  let retireIn = Number(prompt(" At what age would you like to retire? "))
//  let timeUntilRetire =  retireIn - userAge
//  console.log(timeUntilRetire)
//  let mustWorkYears=  currentYear + timeUntilRetire
//  console.log(mustWorkYears)

// პროექტი 15 - Area of a Rectangular Room - მართკუთხა ოთახის ფართობი

// let length = Number(prompt(" What is the length of the room in feet? "));
// let width = Number(prompt(" What is the width of the room in feet? "));
// let squareFoot = length * width;
// let squareMeter = Math.floor(squareFoot * 0.09290304);

// console.log(` You entered dimensions of ${length} feet by ${width} feet,the are is ${squareFoot } square feet, ${squareMeter} square meters`)

// პროექტი 16 - Pizza Party - პიცის წვეულება

// let peopleAmount = Number(prompt("> How many people? "));
// let pizaAmount = Number(prompt("How many pizzas do you have? "));
// let pizaSlices = Number(prompt("how many slices does piza have ?"));
// function counter(people, piza, slices) {
//   let allSlices = piza * slices;
//   let slicesPerPerson = Math.floor(allSlices / people);
//   let leftOver = allSlices % people;
//   return [
//     `you  will have ${slicesPerPerson} slices per person and leftover is ${leftOver}`,
//   ];
// }
// console.log(counter(peopleAmount, pizaAmount, pizaSlices));

// პროექტი 17 - Grocery List - სასურსათო სია
// function foo() {
//   let item;
//   let arr = [];
//   for (; true; ) {
//     item = prompt("what i have to bye ?");
//     if (item === "") {
//       break;
//     }
//     arr.push(item);
//   }
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj.hasOwnProperty(arr[i])) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]] += 1;
//     }
//   }
//   return obj;
// }
// console.log(foo());

// პროექტი 18 - Adieu, adieu - მშვიდობით, მშვიდობით

// let question = prompt("what is your name? ");
// let arr = [];
// for (; true; ) {
//   let question = prompt("what is your name? ");
//   if (question === "") {
//     break;
//   }
//   arr.push(question);
// }
// console.log(`Adieu, adieu, to ${arr}`);

// პროექტი 19 - Paint Calculator - საღებავის კალკულატორი

// let length = prompt("what is your length ?");
// let width = prompt("what is your width ?");
// let squareMeter = length * width;
// let quantity = Math.ceil(squareMeter / 360);
// console.log(quantity);

// პროექტი 20 - Self-Checkout - თვით-გადახდა

// let firstPrice = Number(prompt(" Enter the price of item 1 "));
// let firstQuantity = Number(prompt(" Enter the quantity of item 1 "));
// let secondPrice = Number(prompt("Enter the price of item 2 "));
// let secondQuantity = Number(prompt("Enter the quantity of item 2 "));
// let thirdPrice = Number(prompt("Enter the price of item 3 "));
// let thirdQuantity = Number(prompt("Enter the quantity of item 3 "));
// let firstTotal = firstPrice * firstQuantity;
// let secondTotal = secondPrice * secondQuantity;
// let thirdTotal = thirdPrice * thirdQuantity;
// let subTotal = firstTotal + secondTotal + thirdTotal;
// let tax = subTotal * 0.055;
// let total = subTotal + tax;
// console.log(subTotal);
// console.log(tax);
// console.log(total);

// პროექტი 21 - Currency Conversion - ვალუტის კონვერტაცია
// let amountFrom = Number(prompt(" How many euros are you exchanging? "))
// let rateFrom = Number(prompt("What is the exchange rate of euro? "))
// let rateTo = Number(prompt("What is the exchange rate of dollar? "))
//  let amountTo = (amountFrom * rateFrom) / rateTo

//  console.log(`${amountFrom} euros at an exchange rate of ${rateFrom} is ${amountTo} U.S dollars`)

// პროექტი 23 - Determining Compound Interest - რთული პროცენტის გამოთვლა
// let investment = Number(prompt(" What is the principal amount? "))
// let anualRate = Number(prompt("What is the rate? "))
// let numberOfYears = Number(prompt("What is the number of years? "))
// let rateAmountPerYear = Number(prompt(" What is the number of times the interest is compounded per year? "))

//  let totalInvestment = investment * (1+ anualRate / rateAmountPerYear )*rateAmountPerYear * numberOfYears
//  console.log(`${investment} invested at  ${anualRate} 6 years compounded   ${rateAmountPerYear} per year is  ${totalInvestment}`)

// პროექტი 24 - Deep Thought - ღრმა ფიქრი

// let answer = "forty-two";
// let answer1 = "forty two";
// let answer2 = "42";
// for (; true; ) {
//   let question = prompt(
//     " What is the answer to the Great Question of Life, the Universe, and Everything? "
//   ).toLowerCase();
//   if (question === answer || question === answer1 || question === answer2) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

// პროექტი 25 - Home Federal Saving Bank - ფედერალური ბანკი
// let greeting = prompt("i need some help,are you free?").toLowerCase()
// if (greeting === "hello") {
//   console.log("$0");
// } else if (greeting[0] === "h") {
//   console.log("$20");
// } else {
//  console.log("$100")
// }

// პროექტი 26 - Felipe's Taqueria - ფელიპეს სასადილო

// let menu = {
//   "Baja Taco": 4.25,
//   Burrito: 7.5,
//   Bowl: 8.5,
//   Nachos: 11.0,
//   Quesadilla: 8.5,
//   "Super Burrito": 8.5,
//   "Super Quesadilla": 9.5,
//   Taco: 3.0,
//   "Tortilla Salad": 8.0,
// };
// // let names = Object.keys(menu);
// // let prices = Object.values(menu);
// let count = 0;
// for (;;) {
//   let answer = prompt("what are you ordering? ");
//   if (answer === "") {
//     console.log(` $ ${count}`);
//     break;
//   }
//   if (menu.hasOwnProperty(answer)) {
//     count = count + menu[answer];
//   }
// }

// პროექტი 27 - Emojize - ემოჯებად გადაქცევა

// let smilesObj = {
//   thumbs_up: "👍",
//   earth_africa: "🌍",
//   bear: "🐻",
//   bug: "🐛",
//   bus: "🚌",
// };
// for (;;) {
//   let answer = prompt("please enter your mood");
//   if (answer === "") {
//     break;
//   }
//   if (!smilesObj.hasOwnProperty(answer)) {
//     continue;
//   }
//   console.log(smilesObj[answer]);
// }

// პროექტი 28 - File Extensions - ფაილის ტიპები

// let arr = [".gif", ".jpg", " .jpeg", ".png", ".pdf", ".txt", ".zip"];
// for (;;) {
//   let answer = prompt("please enter your image format");
//   if (arr.includes(answer.slice(answer.length - 4))) {
//     console.log(answer);
//   } else {
//     console.log("application/octet-stream.");
//     break;
//   }
// }

// პროექტი 29 - Math Interpreter - მათემატიკური ინტერპრეტატორი
// let input = eval(prompt("what you want to calculate?"));
// console.log(input.toFixed(2));

// პროექტი 30 - Meal Time - კვების დრო
// let hour;
// for (;;) {
//   hour = prompt("enter your time");
//   if (hour) {
//     break;
//   }
// }
// function convertor(string) {
//   let minutes = Number(string.slice(string.length - 2));
//   let roundedMinutes = Number((minutes / 60).toFixed(2));
//   if (string[2] === ":" && string.slice(0, 2) === "12") {
//     hour = 12 + roundedMinutes;
//   }
//   if (string[1] === ":") {
//     hour = Number(string[0]) + roundedMinutes;
//   }
//   if (string[2] === ":" && string.slice(0, 2) !== "12") {
//     hour = Number(string.slice(0, 2)) + roundedMinutes;
//   }
//   return hour;
// }
// convertor(hour);

// function compare(hour) {
//   if (hour >= 7 && hour <= 8) {
//     return "it is breakfest time";
//   } else if (hour >= 12 && hour < 13) {
//     return "it is lunch time";
//   } else if (hour >= 18 && hour < 19) {
//     return "it is dinner time";
//   } else {
//     return "you can not it right now";
//   }
// }
// console.log(compare(hour));

// პროექტი 31 Adding Numbers

// function sumOfNumbers() {
//   let arr = [];
//   for (let i = 0; i < 5; i++) {
//     let num = Number(prompt("please enter the number "));
//     arr.push(num);
//   }
//   return arr.reduce((acc, element) => acc + element);
// }
// console.log(sumOfNumbers());

// პროექტი 32 - Tax Calculator - გადასახადის კალკულატორი

// let amount = Number(prompt("what is your amount? "));
// let state = prompt("what is your state? ").toUpperCase();
// if (state === "WI") {
//   let tax = amount * 0.55;
//   let taxedAmount = amount + amount * 0.055;
//   console.log(`the tax is ${tax} `);
//   console.log(`the total is ${taxedAmount}`);
// } else {
//   console.log(`the total tax is ${amount}`);
// }

// პროექტი 33 - Password Validation - პაროლის ვალიდაცია

// for (;;) {
//   let password = 2024;
//   let answer = Number(prompt("please enter the password "));
//   if (answer === password) {
//     console.log("< Welcome!");
//     break;
//   } else {
//     console.log("I don't know you.");
//   }
// }

// პროექტი 34 - Legal Driving Age - მართვის კანონიერი ასაკი

// let age = Number(prompt("how old are you "));
// if (age >= 16) {
//   console.log("You are old enough to legally drive.");
// } else {
//   console.log("You are not old enough to legally drive.");
// }

// პროექტი 35 - Blood Alcohol Calculator - სისხლში ალკოჰოლის შემცველობის კალკულატორი

// let weight = Number(prompt("please enter the weight "));
// let gender = prompt("please enter the gender ");
// let glases = Number(prompt("please enter the amount of glasses "));
// let alkoholAmount = Number(prompt("please enter the amount of alcohol "));
// let hours = Number(prompt("how much has passed after drink "));

// let test = ((alkoholAmount * 5.14) / weight) * 0.73 - 0.15 * hours;
// if (gender === "male") {
//   test = ((alkoholAmount * 5.14) / weight) * 0.73 - 0.15 * hours;
// } else {
//   test = ((alkoholAmount * 5.14) / weight) * 0.66 - 0.15 * hours;
// }
// if (test >= 0.08) {
//   console.log("< Your BAC is 0.08,< It is not legal for you to drive.");
// } else {
//   console.log("იგულავე ოქრო");
// }

// პროექტი 36 - Temperature Converter - ტემპერატურის კონვერტაცია
