async function getWeather() {
	const location = document.getElementById("locationInput").value.trim();
	const apiKey = "ea2dd6c08cef4949905161812250708";
	const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

	if (!location) {
	document.getElementById("result").innerText = "Please enter a location.";
	return;
	}

	try {
	const response = await fetch(url);
	if (!response.ok) throw new Error("Location not found");
	const data = await response.json();

	const tempC = data.current.temp_c;
	const humidity = data.current.humidity;
	const windKph = data.current.wind_kph;
	const cloud = data.current.cloud;
	const feelsLike = data.current.feelslike_c;
	const condition = data.current.condition.text;
	const pressure = data.current.pressure_mb;
	const precip_mm = data.current.precip_mm;

	document.getElementById("result").innerHTML = `
		<p><span>Location:</span> ${data.location.name}, ${data.location.country}</p>
		<p><span>Condition:</span> ${condition}</p>
		<p><span>Temperature:</span> ${tempC}°C (Feels like ${feelsLike}°C)</p>
		<p><span>Humidity:</span> ${humidity}%</p>
		<p><span>Cloud Cover:</span> ${cloud}%</p>
		<p><span>Wind Speed:</span> ${windKph} kph</p>
		<p><span>Pressure:</span> ${pressure} mb</p>
		<p><span>Precipitation:</span> ${precip_mm} mm</p>
	`;
	} catch (error) {
	document.getElementById("result").innerText = "Error: " + error.message;
	}
}