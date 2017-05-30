var burger = document.querySelector('.burger');
var icone = document.querySelector('.burger-icon');
var cross = document.querySelector('.cross');
var menu = document.querySelector('.burger-menu');

burger.addEventListener('click', function(){
	menu.classList.toggle('hidden');
	icone.classList.toggle('hidden');
	cross.classList.toggle('hidden');

});

window.addEventListener('resize', function() {
	menu.classList.add('hidden');
	cross.classList.add('hidden');
	icone.classList.remove('hidden');
});

