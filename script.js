//current list of desired fruit[apple, orange, banana, pear, starfruit];
var currentPrice = 3.0;
var averagePrice = currentPrice;
var newPrice = setInterval(priceAdjuster, 5000); //every 15 seconds
var inventoryCount = 0;

$(document).ready(function(){

	//this is where our event listener is - buy button
	$('.buyButton').on('click', $(this).data('fruit'), function(){
		console.log('The ' + $(this).data('fruit') + ' fruit was clicked.' );
		averagePrice = (averagePrice + currentPrice) / 2;
		averagePrice = averagePrice.toFixed(2);
		averagePrice = Number(averagePrice);
		console.log('average price:' , averagePrice);
		inventoryCount ++;
		console.log('inventory count' , inventoryCount);
		return averagePrice;
	});




// varables




});



//do we go up or down:
function priceAdjuster(){
	if(randomNumber(0,1) == 0) {
		currentPrice += (randomNumber(1 , 50) * .01);
		currentPrice = currentPrice.toFixed(2);
		currentPrice = Number(currentPrice);
		console.log(currentPrice);
	} else {
		currentPrice -= (randomNumber(1 , 50) * .01);
		currentPrice = currentPrice.toFixed(2);
		currentPrice = Number(currentPrice);
		console.log(currentPrice);
	}
	return currentPrice;
}


//now we check if this new price is above the max, or below the min

// function minMax
// if current price less 50  = 50
// else if current >9.99 = 9.99

// resut of randomNumber, we if else on that result


// function minMax
// if current price less 50  = 50
// else if current >9.99 = 9.99



function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
