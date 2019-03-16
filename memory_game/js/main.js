
cards =["queen", "queen", "king", "king"];


cardsInPlay =[];

var cardOne = cards[1];
var cardTwo = cards[2];



cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");


/*if (cardsInPlay === cardOne) {
	console.log("User flipped queen");
}
else (cardsInPlay === cardTwo) { 
	console.log("User flipped king");
}*/

if (cardsInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
}
else { 
	alert("Sorry, try again.");
}