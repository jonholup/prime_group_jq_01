//current list of desired fruit[apple, orange, banana, pear, starfruit];
function AddFruit (name, inventoryCount, currentPrice, averagePrice){
	this.name = name;
	this.inventoryCount = inventoryCount;
	this.currentPrice = currentPrice;
	this.averagePrice = averagePrice;
}

var apple = new AddFruit ('apple', 0, 5, 5 );
var orange = new AddFruit ('orange', 0, 3, 3 );
var banana = new AddFruit ('banana', 0, 1, 1 );
var pear = new AddFruit ('pear', 0, 6, 6 );
var starfruit = new AddFruit ('starfruit', 0, 9, 9 );

// var currentPrice = 5;
// var averagePrice = currentPrice;
// var newPrice = setInterval(priceAdjuster, 4000); //every 15 seconds
// var inventoryCount = 0;
var fruitBowl = [apple, orange, banana, pear, starfruit];
console.log(fruitBowl);

$(document).ready(function(){
//
//  writing values for each fruit's current price and inventory
fruitBowl.forEach(function(fruit){
	$('#tableHead').append('<th>' + fruit.name + '</th>')
});
// $('#currentApplePrice').text('apple.currentPrice');


	//this is where our event listener is - buy button
	$('.buyButton').on('click', $(this).data('fruit'), function(){
		console.log('The ' + $(this).data('fruit') + ' fruit was clicked.' );
		$(this).averagePrice = ($(this).averagePrice + $(this).currentPrice) / 2;
		$(this).averagePrice = $(this).averagePrice.toFixed(2);
		$(this).averagePrice = Number($(this).averagePrice);
		console.log('average price:' , $(this).averagePrice);
		$(this).inventoryCount ++;
		console.log('inventory count' , $(this).inventoryCount);
		return $(this).averagePrice;
	});

});

//do we go up or down:
function priceAdjuster(){
	if(randomNumber(0,1) == 0) {
		$(this).currentPrice += (randomNumber(1 , 25) * .01);
		$(this).currentPrice = $(this).currentPrice.toFixed(2);
		$(this).currentPrice = Number($(this).currentPrice);
	} else {
		$(this).currentPrice -= (randomNumber(1 , 25) * .01);
		$(this).currentPrice = $(this).currentPrice.toFixed(2);
		$(this).currentPrice = Number($(this).currentPrice);
	}
  minMax();
	console.log('currentPrice' , $(this).currentPrice);
	return $(this).currentPrice;
}

function minMax(){
if ($(this).currentPrice < .5) {
	$(this).currentPrice = .5;
} else if ($(this).currentPrice > 9.99) {
	$(this).currentPrice = 9.99;
}
}
// function minMax
// if current price less 50  = 50
// else if current >9.99 = 9.99

//now we check if this new price is above the max, or below the min

// function minMax
// if current price less 50  = 50
// else if current >9.99 = 9.99

// resut of randomNumber, we if else on that result






function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
