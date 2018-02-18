
var WordBank = require("./WordBank.js")

var Word = require("./word.js");


 //var hangman = new WordBank;


function Letter(){


	this.displayUnderscores=function(word){
		var blank="";
	 	for(var i =0; i<word.length-1;i++){

	 	blank+="__ "
	    
	 }
	console.log(blank)

	// this.letterChecker=function(letter){

	// 	var (for i=0; i<word.lenght;i++){

	// 		if(letter===word.charAt(i)){
	// 			console.log("Correct!")
	// 		}else{

	// 			console.log("No ")
	// 		}
	// 	}
	// }

}

}
var alpha = new Letter;




 var hangman = new WordBank;









hangman.print();
var currentWord =hangman.wordSelector();

alpha.displayUnderscores(currentWord);

console.log(" current:" + currentWord);

// function counter(){


// }

module.exports=Letter;