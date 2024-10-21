import { createContext, useState } from "react";

export const ProductContext = createContext(0);

const ProductContextProvider = ({ children }) => {
	const [productData, setProductData] = useState({
		product_id: "",
		category: "",
		image: "",
		product_name: "",
		brand: "",
		price: "",
		discount: "",
		final_price: "",
		description: "",
		detailed_specifications: [],
		ratings: 0,
		stock_status: "",
		warranty: "",
	});
	const [productSpecification, setProductSpecification] = useState([]);
	return (
		<>
			<ProductContext.Provider
				value={{
					productData,
					setProductData,
					productSpecification,
					setProductSpecification,
				}}
			>
				{children}
			</ProductContext.Provider>
		</>
	);
};

export default ProductContextProvider;
