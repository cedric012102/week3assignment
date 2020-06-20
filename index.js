//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var ages = [3, 9, 23, 64, 2, 8,  28, 93, 99]

console.log(ages[ages.length - 1])

var numberofNumbers = ages.length
var total = 0
for(var i = 0; i < numberofNumbers; i++) {
  console.log(ages[i])
  total = total + ages[i]
}
let average = total/numberofNumbers
console.log(average)


//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var numberOfPeople = names.length
  var namesTotal = 0
  for (let i = 0; i < numberOfPeople; i++) {
    console.log(names[i].length)
var numberOfLetters = names[i].length
namesTotal = namesTotal + numberOfLetters
  } 
let namesAverage = namesTotal/numberOfPeople
console.log(namesAverage)

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}

//3. How do you access the last element of any array? array[array.length - 1]

//4.	How do you access the first element of any array? array[0] 
//arrays always begin at the 0 index. 

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = ''

for (let i = 0; i <= names[i].length; i++) {
    nameLengths += names[i].length;
  }
    console.log(nameLengths)

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let calculatedTotal = 0

for (let i = 0; i <= nameLengths.length; i++) {
  calculatedTotal += nameLengths.length
}
console.log(calculatedTotal)




//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function combinationWordNumber(word, n) {
  let finalString = ''
  for(let i = 0; i < n; i++) {
      finalString = finalString + word
  }
  return finalString
}

console.log(combinationWordNumber("Hello",3))


//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function createFullName(firstName, lastName) {
  return(firstName +' '+ lastName);
}

var fullName = createFullName('Magic', 'Johnson');
console.log(fullName)

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var arrayOfNumbers = [20, 30, 40, 50]
function isArrayBigger(arrayOfNumbers) {
  let numberTotal = 0
  let numberOfNumbers = arrayOfNumbers.length
  for (let i = 0; i < numberOfNumbers; i++) {
    numberTotal = numberTotal + arrayOfNumbers[i]
  }

if (numberTotal > 100) {
  return true
} else {
  return false
  }
}
console.log(isArrayBigger(arrayOfNumbers))

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
var summerTemperatures = [77, 85, 99, 105]
function whatsTheAverage(summerTemperatures) {
  let tempTotal = 0
  let tempsInArray = summerTemperatures.length
  for(let i = 0; i < tempsInArray; i++) {
    console.log(summerTemperatures[i])
    tempTotal = tempTotal + summerTemperatures[i]
  }
  let summerTempAverage = tempTotal / tempsInArray
  return summerTempAverage
}
console.log(whatsTheAverage(summerTemperatures))

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
var testScores = [57, 66, 78, 98]
// we have our first test score array, we'll need to find the average for these numbers and store it somewhere
var secondTestScores = [45, 61, 88, 99]
//we have the second array, we'll need to find the average and store it somewhere as well 
//type function and place curly brackets around entire code
function isArrayOneBigger(testScores, secondTestScores){
//lets start by finding the first array's average
//in order to find the average, we need the total of all the numbers inside, this variable will hold our total 
let firstArrayTotal = 0
//then we need a variable that will keep track of how many elements are in the array
let numberOfTestsInArrayOne = testScores.length
//then we create a loop which loops through the array, and adds each number into our total
for (let i = 0; i < numberOfTestsInArrayOne; i++){
  firstArrayTotal = firstArrayTotal + testScores[i]
}
//then we declare a new variable which will store the result of our calculation of the average
let arrayOneAverage = firstArrayTotal / numberOfTestsInArrayOne

let secondArrayTotal = 0
let numberOfTestsInArrayTwo = secondTestScores.length
for(let g = 0; g < numberOfTestsInArrayTwo; g++) {
  secondArrayTotal = secondArrayTotal + secondTestScores[g]
}
let arrayTwoAverage = secondArrayTotal / numberOfTestsInArrayTwo
//so now that we have both averages, we can compare them and return our values depending on what happens!
if (arrayOneAverage > arrayTwoAverage){
  return true
  } else {
    return false
  }
}
console.log(isArrayOneBigger(testScores, secondTestScores))






//12. write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true
let moneyInPocket = 20
function willBuyDrink(){
  if (isHotOutside && moneyInPocket > 10.50) {
    return true
  } else {
    return false
  }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket))


//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//I created this function to take an array of names called ninjas from Mortal Kombat, and returns the names who characters are greater than 5 and begin with the letter "S".

let ninjas = ['Scorpion', 'Cyrax', 'Sektor', 'Jax', 'Reptile']

let sNinjas = ninjas.filter(function(warrior) {
  return warrior.length > 5  && warrior.charAt(0) === 'S'
});

console.log(sNinjas);
