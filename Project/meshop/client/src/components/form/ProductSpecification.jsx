import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SpecificationInput = ({
	id = "",
	name = "",
	value = "",
	type = "text",
	isRequired = false,
	placeholder = "",
	classes = "",
	eventHandler,
	onAddValue,
}) => {
	return (
		<div className="input-container flex items-center mb-3">
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={eventHandler}
				required={isRequired}
				className={classes}
			/>
			<button type="button" onClick={onAddValue} className="ml-2">
				<i className="fas fa-plus-circle text-blue-500"></i>
			</button>
		</div>
	);
};

const ProductSpecification = ({ data, handler,info }) => {
	// const [specifications, setSpecifications] = useState(() =>
	// 	data.map((spec) => ({ ...spec }))
	// );
	const [inputValues, setInputValues] = useState({});

	// Handle input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setInputValues((prevData) => ({ ...prevData, [name]: value }));
	};

	// Add value to the specification array
	const addValueToSpecification = (key) => {
		if (inputValues[key]) {
			handler((prev) =>
				prev.map((spec) => {
					const updatedSpec = { ...spec }; // Deep copy
					if (Object.keys(spec)[0] === key) {
						updatedSpec[key] = [
							...(spec[key] || []),
							inputValues[key],
						]; // Append new value
					}
					return updatedSpec;
				})
			);
			setInputValues((prevData) => ({ ...prevData, [key]: "" })); // Clear input after adding
		}
	};

	// // Call handler to update parent with new specifications
	// useEffect(() => {
	// 	handler(specifications); // Sync changes with parent
	// }, [specifications, handler]);

	const handleSubmit = (e) =>{
		
		console.log(data);
		info((prev) => ({...prev,detailed_specifications:data}))
		
	}
	return (
		<div className="w-full">
			{/* <form action="" onSubmit={handleSubmit}> */}
			{data.map((spec, index) => {
				const key = Object.keys(spec)[0]; // Access the key (e.g., 'Display', 'Processor')
				return (
					<SpecificationInput
						key={index}
						id={key}
						value={inputValues[key] || ""}
						name={key}
						isRequired={true}
						placeholder={key}
						eventHandler={handleInputChange}
						onAddValue={() => addValueToSpecification(key)}
						classes="w-full p-3 rounded-md border"
					/>
				);
			})}

			<button type="button" name="submit" className="bg-slate-900 text-white p-2 px-5 rounded-md flex m-auto" onClick={handleSubmit}>Submit</button>
			{/* </form> */}
			<h4 className="mt-4">Specifications Values:</h4>
			<pre className="bg-gray-100 p-2 rounded">
				{JSON.stringify(data, null, 2)}
			</pre>
		</div>
	);
};

ProductSpecification.propTypes = {
	data: PropTypes.array.isRequired,
	handler: PropTypes.func.isRequired,
};

export default ProductSpecification;
