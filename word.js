

var inquirer=require("inquirer");




function Word(word){

	this.word=word;
	this.wordLength=word.length;
	this.currentWord=false;
	

	
}

// var dog = new Word("dog");
// console.log(dog.wordLength)









module.exports=Word;