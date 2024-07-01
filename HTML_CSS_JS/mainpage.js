const slides = document.querySelectorAll('.main-slider'),
	  dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 2000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function page(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 2000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<slides.length;i++){
		slides[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > slides.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = slides.length;
	   }
	slides[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}