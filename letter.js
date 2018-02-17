

function Letter(word){


	this.displayUnderscores=function(){
		var blank="";
		for(var i =0; i<word.length;i++){

		blank+="_";
	    
	}

	this.letterChecker=function(letter){

		var (for i=0; i<word.lenght;i++){

			if(letter===word.charAt(i)){
				console.log("Correct!")
			}else{

				console.log("No ")
			}
		}
	}

}

}


function counter(){

	
}