// <!-- TASK # 01
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx" -->



// TASK # 03

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again

var secretNumber=4;
console.log(secretNumber)
var userGuessNumber=+(prompt("Enter your guess number"));
alert(secretNumber==userGuessNumber?"Congratulations! You guessed the secret number" : "Oops! You entered guess number is not match to system generated number");

// TASK # 04
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

var name =prompt("Enter your name")
alert(name.charAt(0).toUpperCase() + name.slice(1))


//   TASK # 05
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

var contactNumbers=[];
var contactNames=[];
for(var i=0;i<3;i++){
    contactNames.push(prompt("Enter contact name"));
    contactNumbers.push(prompt("Enter contact number"));}
for(var i=0;i<3;i++){
    console.log(contactNames[i]);
    console.log(contactNumbers[i])}

// TASK # 06
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

const product =  ['Cola', 'Lemonade', 'Coffee', 'Water'];
const id = Number(prompt("enter position of product to delete"));
console.log("you are deleting "+product[id-1])
const removedDrink = product .splice(id-1,  1);
console.log("remaining items are = ",product)
console.log("Total item is = ",product.length)


// TASK # 07
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote

var nationality=prompt("enter nationality");
var gender=prompt("enter gender");;
var age=Number(prompt("enter age"));
if(nationality.toLowerCase()==="pakistani" || nationality.toLowerCase()==="indian"){
if(age>=18){
if(gender.toLowerCase()==="male"){

  console.log("eligible to vote")

}
else{
  var ismarried=prompt("enter are you married? if yes press y else press n");
  if(ismarried.toLowerCase()==="y"){
console.log("eligible to vote")
  }
  else{
  console.log("not eligible to vote")
}

}
}
else{
  console.log("not eligible to vote")
}
}
else{
  console.log("not eligible to vote")
}


// TASK # 08

// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array

var playerNames=['aziz','moiz','waqas','hamza','zohaib','salman','bilal','wajeeh','hassan','zeshan','shaheer','kaif','naveed','owais','jawad']
var selectedPlayerNames=[]
for(var i=1;i<=11;i++){
  var randomIndex=Math.floor(Math.random()*15)
  if(!selectedPlayerNames.includes(playerNames[randomIndex])){
selectedPlayerNames.push(playerNames[randomIndex])
  }
  else{
    i--;
  }
}
console.log(selectedPlayerNames)