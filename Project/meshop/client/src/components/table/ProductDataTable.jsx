import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductDataTable = () => {
	const [productData, setProductData] = useState([]);

	const fields = [
		"ID",
		"IMAGE",
		"CATEGORY",
		"NAME",
		"BRAND",
		"DESCRIPTION",
		"SPECIFICATIONS",
		"PRICE",
		"DISCOUNT",
		"WARRANTY",
		"STATUS",
		"RATING",
		"INSPECT",
		"UPDATE",
		"DELETE",
	];
	const fetchProducts = async () => {
		const response = await axios.get("../../../product.json");

		try {
			if (response.status == 200) {
				const data = response.data;
				// console.log(data);
				const filteredData = Object.entries(data).filter(
					([key]) => key == "smartphones"
				);
				console.log(filteredData);
				const smartPhoneData = filteredData[0][1].map((value) => value);
				console.log(smartPhoneData[0].product_id);
				setProductData(smartPhoneData);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	if (productData.length != 0) {
		console.log("data : " + productData[0].product_id);
	}

	const joinSpecifications = (productSpecifications) => {
		let specifications = [];
		console.log(productSpecifications);

		// productSpecifications.map((value, key) => joinSpecifications(value));
		productSpecifications.map((value) =>
			Object.entries(value).map(([key, value]) => (
				<>
					{console.log(value)}
					{specifications.push(
						<>
							<span className="font-semibold">{key}</span>:
							{value.join(", ")}
							<br />
						</>
					)}
				</>
			))
		);

		return specifications;
	};

	// const jointSpecificationValues = (specification) => {
	// 	let specifications = "";
	// 	let features = "";
	// 	Object.entries(specification).map(
	// 		([key, value]) =>
	// 			(specifications +=
	// 				key +
	// 				" : " +
	// 				value.map((value) => (features += value + ", ")))
	// 	) + "<br/>";
	// };
	return (
		<div className="w-full max-w-full p-5">
			<table className="text-nowrap table-auto border border-gray-500">
				<thead>
					{fields.map((value) =>
						value == "PRICE" ? (
							<th colSpan={2} className="border ">
								<th className="text-center border block">
									PRICE
								</th>
								<tr>
									<th className="px-3 border">ORIGINAL</th>
									<th className="px-3 border w-full">SALE</th>
								</tr>
							</th>
						) : (
							<th rowSpan={2} className="border px-4">
								{value}
							</th>
						)
					)}
				</thead>
				<tbody className="text-nowrap text-center">
					{productData.map((value) => (
						<tr>
							<td className="border-b border-gray-400 p-3">
								{value.product_id}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.image}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.category}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.product_name}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.brand}
							</td>
							<td className="border-b border-gray-400 p-3 ">
								{value.description}
							</td>
							<td className="border-b border-gray-400 p-3">
								{joinSpecifications(
									value.detailed_specifications
								)}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.price}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.final_price}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.discount}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.warranty}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.stock_status}
							</td>
							<td className="border-b border-gray-400 p-3">
								{value.ratings}
							</td>
							<td className="border-b border-gray-400 p-3">
								<button>View</button>
							</td>
							<td className="border-b border-gray-400 p-3">
								<button>Edit</button>
							</td>
							<td className="border-b border-gray-400 p-3">
								<button>Remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductDataTable;
