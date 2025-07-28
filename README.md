# Simple Weather App

This is a basic weather application built using HTML, CSS, and JavaScript, which allows users to check the current weather for any city by entering the city's name. The app fetches real-time data from the OpenWeatherMap API and displays the weather information in a user-friendly card format.

## Features

* **City Input**: Users can enter the name of a city to get its current weather details.
* **Weather Information Display**: Displays the city name, temperature (in Celsius), humidity, weather description, and an icon representing the current weather conditions.
* **Responsive Design**: The app is fully responsive and adapts to different screen sizes, ensuring usability on mobile devices.
* **Error Handling**: Displays an error message if the city is not found or if the fetch request fails.

## Technologies Used

* **HTML**: Used for the structure of the web page.
* **CSS**: For styling the app and ensuring it is responsive across devices.
* **JavaScript**: For handling user interactions, fetching data from the API, and updating the DOM with weather information.
* **Axios**: A JavaScript library used to make HTTP requests to the OpenWeatherMap API.

## Getting Started

1. **Clone the Repository**
   To get started, clone this repository to your local machine.
```bash
   git clone https://github.com/yourusername/weather-app.git
```

2. **Open the Project in Your Browser**
   After cloning the project, simply open the `index.html` file in your browser to start using the app.

## API Key

This app uses the [OpenWeatherMap API](https://openweathermap.org/). To make it work, you'll need to sign up for a free API key and replace the existing one in the JavaScript file:

```javascript
const apiKey = 'your-api-key-here'; // Replace with your API key
```

## Code Explanation

### `index.html`

The `index.html` file contains the basic structure of the page, including:

* A form for entering the city name.
* A card that will display the weather information (city name, temperature, humidity, weather description, and icon).
* External CSS and JavaScript files are linked.

### `style.css`

This file is responsible for the styling and layout of the app, including:

* A clean, minimal design.
* A responsive layout that adjusts for different screen sizes.
* Styling for the form input, submit button, and weather information card.

### `script.js`

This file contains the core functionality of the app:

* **Fetching Weather Data**: The `getWeatherData` function uses Axios to fetch data from the OpenWeatherMap API.
* **Displaying Weather Information**: The `displayWeatherInfo` function updates the DOM to display the weather details.
* **Error Handling**: The `displayError` function shows an error message if the city is not found or if the API request fails.
* **Weather Icons**: The `getWeatherIcon` function maps weather condition IDs to the corresponding weather icon URL.

### Example Workflow:

1. User enters a city name in the input field.
2. The app fetches data from the OpenWeatherMap API.
3. The weather information (city name, temperature, humidity, weather description, icon) is displayed on the card.
4. If the city is not found, an error message is shown.


## Future Improvements

* Add more detailed weather information, such as wind speed, pressure, and visibility.
* Add a search history feature so users can view previously searched cities.
* Implement a settings option to toggle between different temperature units (Celsius, Fahrenheit).


---
