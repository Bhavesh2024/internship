import React, { useEffect, useState } from "react";
import { fetchProductData } from "./ProductCard";
import { Link, useNavigate } from "react-router-dom";
const SuggestionCard = ({ productId, data, handler }) => {
	const [suggestionProductData, setSuggestionProductData] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		fetchProductData(
			suggestionProductData,
			setSuggestionProductData,
			productId
		);
	}, []);

	const handleProductData = () => {
		handler(null);
		// console.log(handler)
		console.log(data);
		navigate(`/product/${productId}`);
	};
	return (
		<>
			<div className="flex flex-col h-full">
				{suggestionProductData !== null && (
					<>
						<div className="h-48 w-11/12 flex m-auto">
							<img
								src={suggestionProductData.image}
								alt=""
								className="h-full w-11/12"
							/>
						</div>
						<div className="text-center">
							<button
								className="text-xl font-semibold"
								onClick={handleProductData}
							>
								{suggestionProductData.product_name}
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default SuggestionCard;
