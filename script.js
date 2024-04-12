const weatherForm = document.querySelector();
const cityInput = document.querySelector(".city-input");
const card = document.querySelector();
const apiKey = "a3f02f52d7fd9e29cb854bb671577488";

weatherForm.addEventListener("submit", event => {

event.preventDefault();

const city = cityInput.value;

if(city) {

}
else {
    displayError("Please enter a city")
}
});

async function getWeatherData(city) {

    const apiURL = '';


}

function displayWeatherInfo(data) {


}

function getWeatherEmoji(weatherId) {


}

function displayError(message) {
    const errorDisplay=document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}