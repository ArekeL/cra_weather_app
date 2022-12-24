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
				<div className='wrapper city'>
					<div className='icon'>
						<MdOutlineMapsHomeWork />
					</div>
					<div className='info'>{city}</div>
				</div>
				<div className='wrapper date'>
					<div className='icon'>
						<WiTime4 />
					</div>
					<div className='info'>{date}</div>
				</div>
				<div className='wrapper temp'>
					<div className='icon'>
						<WiThermometer />
					</div>
					<div className='info'>{temp} &#176;C</div>
				</div>
				<div className='wrapper sunriseTime'>
					<div className='icon'>
						<WiSunrise />
					</div>
					<div className='info'>{sunriseTime}</div>
				</div>
				<div className='wrapper sunsetTime'>
					<div className='icon'>
						<WiSunset />
					</div>
					<div className='info'>{sunsetTime}</div>
				</div>
				<div className='wrapper wind'>
					<div className='icon'>
						<WiSandstorm />
					</div>
					<div className='info'>{wind} m/s</div>
				</div>
				<div className='wrapper pressure'>
					<div className='icon'>
						<WiBarometer />
					</div>
					<div className='info'>{pressure} hPa</div>
				</div>
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
