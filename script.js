async function getWeather() {
	const location = document.getElementById("locationInput").value;
	const apiKey = "ea2dd6c08cef4949905161812250708";
	const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("Location not found");
		const data = await response.json();
		const tempC = data.current.temp_c;
		document.getElementById("result").innerText = `Temperature in ${location}: ${tempC}°C`;
	} catch (error) {
		document.getElementById("result").innerText = "Error: " + error.message;
	}
}