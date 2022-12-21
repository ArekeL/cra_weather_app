import React from "react";

const Result = (props) => {
	const { err, date, city, sunrise, sunset, temp, pressure, wind } =
		props.weather;

	let content = null;

	if (!err && city) {
		const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
		const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

		console.log(sunriseTime);
		content = (
			<div>
				<div>Miasto: {city}</div>
				<div>Czas {date}</div>
				<div>Temperatura {temp} &#176;C</div>
				<div>Wschód słońca {sunriseTime}</div>
				<div>Zachód Słońca {sunsetTime}</div>
				<div>Siła wiatru {wind} m/s</div>
				<div>Ciśnienie {pressure} hPa</div>
			</div>
		);
	}

	return (
		<div className='result'>
			{err ? `Nie mammy danych dla ${city}` : content}
		</div>
	);
};

export default Result;
