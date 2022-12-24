import React from "react";
import "./Form.css";

const Form = (props) => {
	return (
		<form onSubmit={props.submit}>
			<input
				className='inp'
				type='text'
				placeholder='City'
				value={props.value}
				onChange={props.change}
			/>
			<button className='btn'>Search</button>
		</form>
	);
};

export default Form;
