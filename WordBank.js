
var Word = require("./word.js");

function wordBank(word){

var wordArr=["valentine", " roses", " chocolate", " kisses"];

this.wordSelector=function(){
		var w = Math.floor(Math.random()* wordArr.length)
		//	console.log(wordArr[w])
			return wordArr[w];

	}

this.Bank= function(word){

	

	wordArr.push(word.word);
	console.log(word.word + " added to word bank!");


}

this.print= function(){
	console.log("\nlist of words in bank: ")
	for(var i =0; i <wordArr.length; i++){

		console.log(wordArr[i]);
	}
}

}






module.exports=wordBank;