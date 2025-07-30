//Weather app

// Select the form, input field, submit button, and display container
const form = document.querySelector('#weatherForm');
const cityInput = document.querySelector('.cityInput');
const button = document.querySelector('.submitBtn');
const card = document.querySelector('.cardDisplay');
// OpenWeatherMap API key
const apiKey = 'd58f45cc3582feaec0b0762d005b9ec1';


// Event listener for the form submit action
form.addEventListener('submit', async (e) => {
    e.preventDefault();     // Prevent the page from reloading on submit
    const city = cityInput.value;   // Get the city from input
    try {
        const weatherData = await getWeatherData(city);     // Call API and get data
        displayWeatherInfo(weatherData);    // Show the data on screen

    } catch (e) {
        displayError(e.message);     // Show error if city not found
    }
    cityInput.value = '';   // Clear input after submission
})


// Fetch weather data using axios and async/await
async function getWeatherData(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const res = await axios.get(apiUrl);    // Make GET request
        return res.data;    // Return only the data part of response

    } catch {
        throw new Error('City Not Found :(');   // Throw custom error for catch block above
    }

}


// Function to update DOM with weather info
function displayWeatherInfo(data) {
    // Destructuring to extract needed values
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id, icon}],
        dt, timezone } = data;

    // Calculate local time by adjusting UTC with timezone offset
    const calcTimeZone = (dt + timezone) * 1000;    // convert to milliseconds
    const options = {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }
    const localTime = new Date(calcTimeZone).toLocaleString('en-US', options);

    // Clear previous results and show card
    card.textContent = '';
    card.style.display = 'flex';

    // Create new elements to display weather info
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humiDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherIcon = document.createElement('img');
    const reportTime = document.createElement('p');

    // Set their contents
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humiDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherIcon.src = getWeatherIcon(id, icon);      //Function return it's proper weather icon based on id
    reportTime.textContent = `Reported on: ${localTime}`;

    // Add classes for styling (from your CSS)
    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humiDisplay.classList.add('humiDisplay');
    descDisplay.classList.add('descDisplay');
    weatherIcon.classList.add('weatherIcon');

    // Append all elements to the card for display
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humiDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherIcon);
    card.appendChild(reportTime);
}


// Function to return the appropriate weather icon based on weather ID
function getWeatherIcon(weatherId, icon) {

    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;

        case (weatherId >= 300 && weatherId < 400 || weatherId >= 520 && weatherId < 600):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;

        case (weatherId >= 500 && weatherId < 505):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;

        case (weatherId === 511 || weatherId >= 600 && weatherId < 700):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;

        case (weatherId >= 701 && weatherId < 800):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;

        case (weatherId === 800):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;

        case (weatherId === 801):
            return `https://openweathermap.org/img/wn${icon}@2x.png`;

        case (weatherId === 802):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;

        case (weatherId === 803 || weatherId === 804):
            return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }

}

// Display error messages in case of invalid input or failed fetch
function displayError(message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = 'flex';
    card.appendChild(errorDisplay);
}
