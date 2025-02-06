// Update Year and Last Modified Date
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Check if 'lastModified' element exists before updating
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
}

// Windchill calculation function (Wind speed needs to be in m/s)
function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Convert windSpeed from km/h to m/s
        const windSpeedInMps = windSpeed / 3.6;

        // Formula for windchill: Only applies for valid conditions
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeedInMps, 0.16) + 0.3965 * temperature * Math.pow(windSpeedInMps, 0.16);
        return windChill.toFixed(1); // rounded to 1 decimal place
    } else {
        return "N/A"; // No windchill calculation possible
    }
}

// Example to update Country Data dynamically
document.getElementById('city-name').textContent = 'Sydney';
document.getElementById('temperature').textContent = 'Temperature: 25°C';
document.getElementById('windspeed').textContent = 'Wind Speed: 15 km/h';
document.getElementById('windchill-result').textContent = 'Feels like: 22°C';

// Example for Country Data
document.querySelector('.country-overlay p:nth-of-type(1)').textContent = 'Area: 7,692,024 km²';
document.querySelector('.country-overlay p:nth-of-type(2)').textContent = 'Population: 25.69 million';
document.querySelector('.country-overlay p:nth-of-type(3)').textContent = 'Language: English';
document.querySelector('.country-overlay p:nth-of-type(4)').textContent = 'Capital: Canberra';

// Example data (static values for now)
const temperature = 15; // in Celsius
const windSpeed = 15; // in km/h

// Calculate windchill and update page
const windChillResult = calculateWindChill(temperature, windSpeed);
document.getElementById('windchill-result').textContent = `${windChillResult}°C`;

