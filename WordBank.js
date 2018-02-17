
var Word = require("./word.js");

function wordBank(word){

var wordArr=[];

this.wordSelector=function(){
		var w = Math.floor(Math.Random()* wordArr.length)
			return wordArrk[w];
	}

this.Bank= function(word){

	

	wordArr.push(word);
	console.log(word + " added to word bank!");


}

this.print= function(){
	console.log("list of words in bank: ")
	for(var i =0; i <wordArr.length; i++){

		console.log(wordArr[i]);
	}
}

}


var dog = new Word("dog");


var hangman = new wordBank;
hangman.Bank(dog.word);
hangman.print();

var cat = new Word("cat");
hangman.Bank(cat.word);
hangman.print();

var valetine = new Word("valetine");
hangman.Bank(valetine.word);
hangman.print();



console.log(dog.wordLength);

module.exports=wordBank;