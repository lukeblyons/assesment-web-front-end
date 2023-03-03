const restaurants = [
  "Magleby's Fresh",
  "J Dawgs",
  "Costa Vida Fresh Mexican Grill",
  "Marley's Gourmet Sliders",
  "Osaka Japanese Sushi & Hibachi",
  "Carrabba's Italian Grill",
  "Mimi's Cafe",
  "Tsunami Restaurant & Sushi Bar",
  "Waffle Love",
  "Zupas",
  "Cafe Rio Mexican Grill",
  "Pizza Studio",
  "Five Guys",
  "Culver's",
  "Chick-fil-A",
  "In-N-Out Burger",
  "Kneaders Bakery & Cafe",
  "Smashburger",
  "Sabaidee Thai Cuisine",
  "R & R BBQ"
];

const recommendRestaurant = () => {
	const randomIndex = Math.floor(Math.random() * restaurants.length);
	const randomRestaurant = restaurants[randomIndex];
	alert(`You should try ${randomRestaurant} for your next meal!`);
};

const recommendButton = document.getElementById('recommend-restaurant');
recommendButton.addEventListener('click', recommendRestaurant);
