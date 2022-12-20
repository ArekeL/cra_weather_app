import React from "react";

const Form = (props) => {
	return (
		<form onSubmit={props.submit}>
			<input
				type='text'
				placeholder='City'
				value={props.value}
				onChange={props.change}
			/>
			<button>Search</button>
		</form>
	);
};

export default Form;
