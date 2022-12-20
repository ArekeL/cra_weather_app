import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

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
		err: "",
	};

	handleInputChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	handleCitySubmit = (e) => {
		e.preventDefault();

		const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=d924c5db7f712ccd58435c522a227137`;

		fetch(API)
			.then((response) => {
				if (response.ok) {
					return response;
				}
				throw Error("Niestety nie działa");
			})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch(this.state.err);
	};
	render() {
		return (
			<>
				<Form
					value={this.state.value}
					change={this.handleInputChange}
					submit={this.handleCitySubmit}
				/>
				<Result />
			</>
		);
	}
}

export default App;
