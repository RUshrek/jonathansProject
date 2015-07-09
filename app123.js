var Uscore = 0;

var highscore = 10;

var press = function () {
	Uscore++;
	document.getElementById('score').innerHTML = "your Score:" + Uscore;
	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New highscore:" + Uscore;
	return;
	}
};
	

$("#startClock").click( function(){
	setInterval(function () {
			if( confirm("Time's up") === true ){

				location.reload();		

			}
			//if (r === true) {
			//	if(highscore>10){
			//		$("body").fadeOut(function(){
			//			$(this).text("Congratulations you got a new highscore!");
	},10000);
	// $("body").fadeOut();
	// $('#hiscore').append("Congratulation you got a new highscore");
});
