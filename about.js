console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form submitted successfully!');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let rubberDuckPicture = document.querySelector('img');
rubberDuckPicture.addEventListener('mouseover', () => {
	alert('There is nothing in this world that you cannot accomplish!');
});
