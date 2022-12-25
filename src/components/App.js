import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

// Key to API
const APIKey = "d924c5db7f712ccd58435c522a227137";

class App extends Component {
	state = {
		value: "",
		date: "",
		city: "",
		sunrise: "",
		sunset: "",
		temp: "",
		pressure: "",
		wind: "",
		country: "",
		err: "",
	};

	handleInputChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	handleCitySubmit = (e) => {
		e.preventDefault();

		const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

		fetch(API)
			.then((response) => {
				if (response.ok) {
					return response;
				}
				throw Error("Error something went wrong");
			})
			.then((response) => response.json())
			.then((data) => {
				this.setState((prevState) => ({
					err: false,
					date: new Date().toLocaleString(),
					city: prevState.value,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					country: data.sys.country,
					temp: data.main.temp,
					pressure: data.main.pressure,
					wind: data.wind.speed,
				}));
			})
			.catch((err) => {
				this.setState((prevState) => ({
					err: true,
					city: prevState.value,
				}));
				console.log(err);
			});
	};
	render() {
		return (
			<div className='App'>
				<p className='title'>Weather</p>
				<Form
					value={this.state.value}
					change={this.handleInputChange}
					submit={this.handleCitySubmit}
				/>
				<Result weather={this.state} />
			</div>
		);
	}
}

export default App;
