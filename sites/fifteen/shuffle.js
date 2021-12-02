window.onload = function(){
	var fifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	
	function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
    	}
    }
    
    shuffleArray(fifteen);

    for (var i=0; i<fifteen.length; i++){
    	console.log(fifteen[i]);
    }
}