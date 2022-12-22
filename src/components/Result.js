import React from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { WiTime4 } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiSandstorm } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import "./Result.css";

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
				<div className='icon'>
					<MdOutlineMapsHomeWork />
				</div>
				<div className='imfo'>Miasto: {city}</div>
				<div className='icon'>
					<WiTime4 />
				</div>
				<div className='imfo'>Czas {date}</div>
				<div className='icon'>
					<WiThermometer />
				</div>
				<div className='imfo'>Temperatura {temp} &#176;C</div>
				<div className='icon'>
					<WiSunrise />
				</div>
				<div className='imfo'>Wschód słońca {sunriseTime}</div>
				<div className='icon'>
					<WiSunset />
				</div>
				<div className='imfo'>Zachód Słońca {sunsetTime}</div>
				<div className='icon'>
					<WiSandstorm />
				</div>
				<div className='imfo'>Siła wiatru {wind} m/s</div>
				<div className='icon'>
					<WiBarometer />
				</div>
				<div className='imfo'>Ciśnienie {pressure} hPa</div>
			</div>
		);
	}

	return (
		<div className='result'>
			{err ? `Nie mamy danych dla ${city}` : content}
		</div>
	);
};

export default Result;
