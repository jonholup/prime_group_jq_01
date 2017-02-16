console.log('yo');
$(document).ready(function(){

$('.buyButton').on('click', $(this).data('fruit'), function(){
 console.log('The ' + $(this).data('fruit') + ' fruit was clicked.' );
});












});

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
