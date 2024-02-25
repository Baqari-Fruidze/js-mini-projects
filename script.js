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
