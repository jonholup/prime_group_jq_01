console.log('yo');
$(document).ready(function(){

$('.buyButton').on('click', $(this).data('fruit'), function(){
 console.log('The ' + $(this).data('fruit') + ' fruit was clicked.' );
});




});
 var currentPrice =3.0

//every 15 seconds

//do we go up or down:
if(randomNumber(0,1) == 0) {
	currentPrice +=(randomNumber(1 , 50) * .01);
} else {
	currentPrice -=(randomNumber(1 , 50) * .01);
}
console.log(currentPrice);


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
