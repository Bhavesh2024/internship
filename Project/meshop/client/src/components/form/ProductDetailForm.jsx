import React, { useContext, useEffect, useRef, useState } from "react";
import ProductBaseInfo from "./ProductBaseInfo";
import ProductSpecification from "./ProductSpecification";
import { ProductContext } from "../../context/ProductContext";

const ProductDetailForm = () => {
	const {
		productData,
		setProductData,
		productSpecification,
		setProductSpecification,
	} = useContext(ProductContext);
	const [switchForm, setSwitchForm] = useState(true);
	const [isValid, setIsValid] = useState(false);

	const btnRef = useRef(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			productSpecification.some(
				(data) => Array.isArray(data) && data.items.le
			)
		);
		const isValidSpecification = productSpecification.every((obj) => {
			return Object.values(obj).every(
				(arr) => Array.isArray(arr) && arr.length > 0
			);
		});
		console.log(productSpecification);
		setIsValid(isValidSpecification);
		console.log(isValidSpecification);
		if (!isValid) {
			console.log("Please Fill Out All Specification");
		} else {
			console.log("all is well");
		}
	};

	useEffect(() => {
		if (btnRef.current) {
			btnRef.current.disabled = true;
		}
	}, []);
	return (
		<div className="flex mx-auto w-1/2 bg-white rounded-md flex-col overflow-auto scrollbar-none h-70vh p-5">
			<div className="text-2xl font-semibold text-center p-4 w-full">
				Add Product
			</div>
			<div className="w-full flex justify-around">
				<button
					className="p-3 font-semibold text-indigo-800"
					onClick={() => setSwitchForm(true)}
				>
					Product Info
				</button>
				<button
					className="p-3 font-semibold text-indigo-800 disabled:text-indigo-200"
					ref={btnRef}
					onClick={() => setSwitchForm(false)}
				>
					Specification
				</button>
			</div>
			<div className="flex justify-center overflow-auto scrollbar-none p-4">
				{switchForm ? (
					<ProductBaseInfo
						data={productData}
						handler={setProductData}
						specification={setProductSpecification}
						refs={btnRef}
						submitHandler={handleSubmit}
					/>
				) : (
					<ProductSpecification
						data={productSpecification}
						handler={setProductSpecification}
						info={setProductData}
					/>
				)}
			</div>
		</div>
	);
};

export default ProductDetailForm;

// import React, { useEffect, useRef, useState } from "react";
// import { smartPhone, smartTv, headphone } from "./productDefault";
// const ProductInfoForm = ({ data, handler, switchRef, categoryHandler }) => {
// 	const finalPrice = (price, discount) => {
// 		return price - (price / discount);
// 	};

// 	const handleInput = (e) => {
// 		const { name, value } = e.target;

// 		if (name == "category" && value != "") {
// 			switchRef.current.disabled = false;
// 			categoryHandler(value);
// 		}
// 		handler({ ...data, [name]: value });
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 	};
// 	return (
// 		<>
// 			<form className="w-full flex m-auto py-3" onSubmit={handleSubmit}>
// 				<fieldset className="flex flex-col gap-2 w-11/12 mx-auto">
// 					<div>
// 						<input
// 							type="text"
// 							id="product_id"
// 							name="product_id"
// 							value={data.product_id}
// 							placeholder={"Product ID"}
// 							className="border p-2 rounded w-full"
// 							onChange={handleInput}
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<input
// 							type="text"
// 							id="product_name"
// 							name="product_name"
// 							value={data.product_name}
// 							placeholder={"Product Name"}
// 							className="border p-2 rounded w-full"
// 							onChange={handleInput}
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<input
// 							type="text"
// 							id="brand"
// 							name="brand"
// 							value={data.brand}
// 							placeholder={"Brand Name"}
// 							className="border p-2 rounded w-full"
// 							onChange={handleInput}
// 							required
// 						/>
// 					</div>

// 					<div>
// 						<select
// 							name={"category"}
// 							id={"category"}
// 							onChange={handleInput}
// 							className="text-gray-400 border p-2 rounded w-full"
// 							value={data.category}
// 							required
// 						>
// 							<option value="" disabled selected>
// 								Select Category
// 							</option>
// 							<option value="smartphones" name={"category"}>
// 								Smartphone
// 							</option>
// 							<option value="smartTvs" name={"category"}>
// 								Smart TV
// 							</option>
// 							<option value="headphones" name={"category"}>
// 								Headphone
// 							</option>
// 						</select>
// 					</div>

// 					<div>
// 						<input
// 							type="number"
// 							id="price"
// 							name="price"
// 							value={data.price}
// 							placeholder={"Price"}
// 							className="border p-2 rounded w-full"
// 							onChange={handleInput}
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<input
// 							type="number"
// 							id="discount"
// 							name="discount"
// 							value={data.discount}
// 							placeholder={"Discount"}
// 							className="border p-2 rounded w-full"
// 							onChange={handleInput}
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<input
// 							type="text"
// 							id="final_price"
// 							name="final_price"
// 							value={data.final_price}
// 							placeholder={"Sale Price"}
// 							className="border p-2 rounded w-full"
// 							onChange={handleInput}
// 							readOnly
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<input
// 							type="text"
// 							id="warranty"
// 							name="warranty"
// 							value={data.warranty}
// 							placeholder={"Warranty"}
// 							className="border p-2 rounded w-full"
// 							onChange={handleInput}
// 							required
// 						/>
// 					</div>

// 					<div>
// 						<select
// 							name={"stock_status"}
// 							id={"stock_status"}
// 							onChange={handleInput}
// 							className="text-gray-400 border p-2 rounded w-full"
// 							required
// 						>
// 							<option
// 								value=""
// 								disabled
// 								selected
// 								className="text-"
// 							>
// 								Stock Status
// 							</option>
// 							<option value="In Stock" name={"stock_status"}>
// 								In Stock
// 							</option>
// 							<option value="Out of Stock" name={"stock_status"}>
// 								Out of Stock
// 							</option>
// 						</select>
// 					</div>
// 					<div>
// 						<button
// 							type="submit"
// 							name="submit"
// 							className="flex m-auto mt-4 bg-slate-800 text-gray-100 p-2 px-4 rounded-md"
// 						>
// 							Submit
// 						</button>
// 					</div>
// 				</fieldset>
// 			</form>
// 		</>
// 	);
// };

// const ProductSpecificationForm = ({ category, data, handler }) => {
// 	useEffect(() => {
// 		const categoryData = {
// 			smartphones: smartPhone,
// 			smartTvs: smartTv,
// 			headphones: headphone,
// 		};
// 		// console.log(categoryData[category]);
// 		if (categoryData[category]) {
// 			console.log(categoryData[category]);
// 			console.log(categoryData[category].detailed_specifications);
// 			handler(categoryData[category].detailed_specifications);
// 			if (data) {
// 				console.log("data" + data);
// 			}
// 		}
// 	}, []);

// 	const getSpecKey = (obj) => {
// 		const key = Object.keys(obj);
// 		return key[0];
// 	};

// 	const handleInput = (e) => {
// 		const { name, value } = e.target;

// 		console.log(data);
// 	};
// 	return (
// 		<>
// 			<form>
// 				{data.map((value, key) => (

// 						<input
// 							type="text"
// 							className="border p-2"
// 							id={getSpecKey(value)}
// 							name={getSpecKey(value)}
// 							placeholder={getSpecKey(value)}
// 							value={value[getSpecKey(value)][key]}
// 							onChange={handleInput}
// 							required
// 						/>
// 					</div>
// 				))}
// 			</form>
// 		</>
// 	);
// };

// const ProductDetailForm = () => {
// 	const [productData, setProductData] = useState({
// 		product_id: "",
// 		category: "",
// 		image: "",
// 		product_name: "",
// 		brand: "",
// 		price: "",
// 		discount: "",
// 		final_price: "",
// 		description: "",
// 		detailed_specifications: [],
// 		available_colors: [],
// 		ratings: 0,
// 		stock_status: "",
// 		warranty: "",
// 	});
// 	const [specification, setSpecification] = useState([]);
// 	const [switchForm, setSwitchForm] = useState(true);
// 	const [category, setCategory] = useState("");
// 	const btnRef = useRef(null);

// 	useEffect(() => {
// 		if (btnRef.current) {
// 			btnRef.current.disabled = true;
// 		}
// 	}, []);
// 	return (
// 		<div className="h-fit bg-white m-auto rounded-md w-1/2">
// 			<div className="bg-slate-900 py-4 rounded-t-md text-white">
// 				<h1 className="text-center font-semibold text-2xl">
// 					Add Product{" "}
// 				</h1>
// 				<div className="flex justify-between py-2 ">
// 					<button
// 						onClick={() => setSwitchForm(true)}
// 						className="flex-grow text-orange-400 font-semibold text-lg hover:text-indigo-300"
// 					>
// 						Prduct Info
// 					</button>
// 					<button
// 						onClick={() => setSwitchForm(false)}
// 						className="flex-grow text-orange-400 font-semibold text-lg hover:text-indigo-300 disabled:text-gray-500"
// 						ref={btnRef}
// 					>
// 						Specification
// 					</button>
// 				</div>
// 			</div>
// 			{/* <div className="flex justify-center items-center"> */}
// 			{switchForm ? (
// 				<ProductInfoForm
// 					switchRef={btnRef}
// 					data={productData}
// 					handler={setProductData}
// 					categoryHandler={setCategory}
// 				/>
// 			) : (
// 				<ProductSpecificationForm
// 					category={category}
// 					data={specification}
// 					handler={setSpecification}
// 				/>
// 			)}
// 			{/* </div> */}
// 		</div>
// 	);
// };

// export default ProductDetailForm;
