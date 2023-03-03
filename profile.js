const colorButton = document.getElementById("color");
colorButton.addEventListener("click", () => {
  alert("My favorite color is blue!");
});

const placeButton = document.getElementById("place");
placeButton.addEventListener("click", () => {
  alert("My favorite place is the on the slopes!");
});

const ritualButton = document.getElementById("ritual");
ritualButton.addEventListener("click", () => {
  alert("My favorite ritual playing Nintendo Switch with my wife!");
});

const img = document.getElementById("profile-image");

img.addEventListener("mouseover", () => {
  alert("This is a picture of me!");
});

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form submitted successfully!');
}

let form = document.querySelector('#stay-in-contact');
form.addEventListener('submit', handleSubmit);