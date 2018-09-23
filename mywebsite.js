window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}

window.sr = ScrollReveal();

	sr.reveal('.border',{
		duration:3000});

	sr.reveal('.card',{
		delay: 2000,
		duration:2000,	
		origin:'right',
		distance:'180px'});

	sr.reveal('.card2',{
		delay: 800,
		duration:2000});

	sr.reveal('.card3',{
		delay: 1500,
		duration:2000,
		origin:'left',
		distance:'180px'});

	sr.reveal('.GitHub',{
		delay: 3000,
		duration:2000});

	sr.reveal('.panda',{
		delay:4000});



// var name = prompt('What is your name');
// alert(name);

// if () {

// }
// else () {

// }