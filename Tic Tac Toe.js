var playerSwitch = 1;
//fill the cell with X or 0 if is empty
function putX0(cellId) {
	if (isFilled(cellId) == false) {
		if (playerSwitch % 2 != 0) {
			document.getElementById(cellId).innerHTML = "X";
		} else {
			document.getElementById(cellId).innerHTML = "0";
		}
		++playerSwitch;
		if(statusMessage(cellId)) {
			return clearBoard();
		}
	}	
}
//check if is win or draw
function checkStatusGame() {
	//check for every line
	for (var i = 1, id = 0; i <= 3; ++i, id += 3) {
		if ((document.getElementById(id + 1).innerHTML == "X" && document.getElementById(id + 2).innerHTML == "X" 
			&& document.getElementById(id + 3).innerHTML == "X") || (document.getElementById(id + 1).innerHTML == "0" 
		&& document.getElementById(id + 2).innerHTML == "0" && document.getElementById(id + 3).innerHTML == "0")) {
			return true;
		}
	}
	//check for every column
	for (var i = 1, id = 0; i <= 3; ++i, ++id) {
		if ((document.getElementById(id + 1).innerHTML == "X" && document.getElementById(id + 4).innerHTML == "X" 
			&& document.getElementById(id + 7).innerHTML == "X") || (document.getElementById(id + 1).innerHTML == "0" 
		&& document.getElementById(id + 4).innerHTML == "0" && document.getElementById(id + 7).innerHTML == "0")) {
			return true;
		}
	}
	//check for main diagonal
	if ((document.getElementById("1").innerHTML == "X" && document.getElementById('5').innerHTML == "X" 
		&& document.getElementById("9").innerHTML == "X") || (document.getElementById("1").innerHTML == "0" 
		&& document.getElementById("5").innerHTML == "0" && document.getElementById("9").innerHTML == "0")) {
			return true;
		}
	//check for secondary diagonal
	if ((document.getElementById("3").innerHTML == "X" && document.getElementById('5').innerHTML == "X" 
		&& document.getElementById("7").innerHTML == "X") || (document.getElementById("3").innerHTML == "0" 
		&& document.getElementById("5").innerHTML == "0" && document.getElementById("7").innerHTML == "0")) {
			return true;
		}
	return false;
}
//prints the message
function statusMessage(winnerPlayer) {
	if (checkStatusGame() == true) {
		document.getElementById("statusMessage").innerHTML = "Winner is: player " + document.getElementById(winnerPlayer).innerHTML;
	} else if (playerSwitch == 10){
		document.getElementById("statusMessage").innerHTML = "Draw, try again!";
	}
}
//reset the entire board so you can play again
function clearBoard() {
	for (var i = 1; i <= 9; ++i) {
		document.getElementById(i).innerHTML = "";
	}
	document.getElementById("statusMessage").innerHTML = "";
	playerSwitch = 1;
	return false;
}
//checks if the cell is empty
function isFilled(checkCell) {
	if (document.getElementById(checkCell).innerHTML == "X" || 
		document.getElementById(checkCell).innerHTML == "0") {
		return true;
	}
	return false;
}