/*
0.select a word..done
01. display blanks on screen...done
1. prompt user for guess..done!
2. check letter if in word
3. if the letter is not in word alert user and deduct trials
3b. if the letter is in word, alert user and replace blank with correct letter
4. 

*/

var letter = require("./letter.js")
var inquirer = require('inquirer');
inquirer.prompt([/* Pass your questions in here */

{
	type:"input",
	name:"userGuess",
	message:"Guess a letter" + 1
}
	]).then(answers => {
    // Use user feedback for... whatever!!

    console.log(answers.userGuess)
});