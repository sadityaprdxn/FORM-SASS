'use strict'

window.onload = function() {

	// FOR DOM MANIPULATION
	var formSwitchingArray = this.Array.from(this.document.querySelectorAll('.pannel-container a'));

	formSwitchingArray.forEach(function (element) {
		
		element.addEventListener('click' , function(){
			var formContainer = document.querySelector('.form-container');
	
			if( element.id === "sign-in-button") {
				formContainer.classList.add('active');
				element.parentElement.classList.add('active');
			} else if ( element.id === 'sign-up-button') {
				formContainer.classList.remove('active');
				element.parentElement.classList.remove('active');
			}
		});
	});
}























