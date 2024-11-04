import React, { useContext, useState, useRef, useEffect } from "react";
import ProductBaseInfo from "./ProductBaseInfo";
import ProductSpecification from "./ProductSpecification";
import { ProductContext } from "../../context/ProductContext";
import axios from "axios";
import Modal from "../modal/Modal";
import Error from "../modal/Error";
import Success from "../modal/Success";
import { ProductTableContext } from "../../context/ProductTableContext";
// import { updateProduct } from "../../../../server/controllers/product";
const ProductDetailForm = ({ closeModal, type, id, category }) => {
	const {
		productData,
		setProductData,
		productSpecification,
		setProductSpecification,
	} = useContext(ProductContext);
	const { setProductTableData, fetchProducts } =
		useContext(ProductTableContext);
	const [switchForm, setSwitchForm] = useState(true);
	const [isValid, setIsValid] = useState(false);
	const btnRef = useRef(0);
	const [openModal, setOpenModal] = useState(false);
	const [message, setMessage] = useState({
		text: "",
		error: false,
		success: true,
	});

	const getProductFromId = async (productId) => {
		try {
			const response = await axios.get(
				`http://localhost:5000/api/products/id/${productId}`
			);
			if (response.status == 200) {
				setProductData(response.data);
				setProductSpecification(response.data.detailed_specifications);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const addProduct = async () => {
		try {
			const formData = new FormData();

			// Append all regular product data
			Object.keys(productData).forEach((key) => {
				if (key !== "image") {
					formData.append(key, productData[key]);
				}
			});

			// Append the image if it exists
			if (productData.image) {
				formData.append("image", productData.image);
			}

			console.log(formData);
			// Send formData in a POST request
			const responseImage = await axios.post(
				"http://localhost:5000/api/products/uploads",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (responseImage.status === 200) {
				// console.log("Product Added Successfully");
				console.log(responseImage.data);
				const updatedData = {
					...productData,
					image: responseImage.data.image,
				};
				console.log(updatedData);

				const response = await axios.post(
					"http://localhost:5000/api/products",
					updatedData
				);
				if (response.status == 200) {
					console.log("Product Added Successfully");
					setMessage({
						...message,
						text: response.data.message,
						success: true,
					});
					setOpenModal(!openModal);

					// fetchProducts(productData.);
				}
			}
		} catch (error) {
			console.log(error.response.data.message);
			setMessage({
				...message,
				text: error.response.data.message,
				error: true,
			});
			setOpenModal(!openModal);
			fetchProducts();

			// closeModal(false);
		}
	};

	const updateProduct = async () => {
		setProductData({
			...productData,
			price: `₹${productData.price}`,
			discount: `${productData.discount}%`,
		});
		try {
			const formData = new FormData();

			// Append all regular product data
			Object.keys(productData).forEach((key) => {
				if (key !== "image") {
					formData.append(key, productData[key]);
				}
			});

			// Append the image if it exists
			if (productData.image) {
				formData.append("image", productData.image);
			}

			console.log(formData);
			// Send formData in a POST request

			const responseImage = await axios.post(
				"http://localhost:5000/api/products/uploads",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (responseImage.status === 200) {
				// console.log("Product Added Successfully");
				console.log(responseImage.data);
				const updatedData = {
					...productData,
					image: responseImage.data.image,
				};
				console.log("updated Data : ");
				console.log(updatedData);
				const response = await axios.put(
					"http://localhost:5000/api/products",
					updatedData
				);
				if (response.status == 200) {
					console.log("Product Updated Successfully");
					setMessage({
						...message,
						text: response.data.message,
						success: true,
					});
					setOpenModal(!openModal);
					setProductData(updatedData);
					// setProductTableData((prev) => ({
					// 	...prev,
					// 	[productData.category + "s"]: Object.values(
					// 		productData.category + "s"
					// 	).map((value, index) => {
					// 		if (value.product_id == productData.product_id) {
					// 			value = updatedData;
					// 		}
					// 		return value;
					// 	}),
					// }));
					// closeModal(false);
					fetchProducts(category);
				}
			}
		} catch (error) {
			console.log(error.response.data.message);
			setMessage({
				...message,
				text: error.response.data.message,
				error: true,
			});
			setOpenModal(!openModal);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const isValidSpecification = productData.detailed_specifications.every(
			(obj) =>
				Object.values(obj).every(
					(arr) => Array.isArray(arr) && arr.length > 0
				)
		);
		if (
			isValidSpecification &&
			productData.detailed_specifications.length !== 0
		) {
			setIsValid(true);
		}
		// Validate specifications
	};

	useEffect(() => {
		if (btnRef.current) {
			btnRef.current.disabled = true;
		}
		if (type == "update") {
			getProductFromId(id);
		}
	}, []);

	useEffect(() => {
		if (isValid) {
			type !== "update" ? addProduct() : updateProduct();
		}
	}, [isValid]);

	// useEffect(() => {
	// 	if (type == "update" && isValid) {
	// 		getProductFromId(id);
	// 		setIsValid(false);
	// 	}
	// }, [productData]);
	useEffect(() => {
		if (message.success == true && message.error == true) {
			closeModal(false);
		}
	}, [message]);
	return (
		<div className="flex mx-auto w-full md:w-1/2 bg-white rounded-md flex-col overflow-auto scrollbar-none h-70vh p-5">
			<div className="text-2xl font-semibold text-center p-4 w-full">
				{type !== "update" ? "Add Product" : "Update Product"}
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
						form={type}
					/>
				) : (
					<ProductSpecification
						data={productSpecification}
						handler={setProductSpecification}
						info={setProductData}
						form={type}
					/>
				)}
			</div>
			<Modal open={openModal} onClose={setOpenModal}>
				{message.error ? (
					<Error
						message={message.text}
						onClose={setOpenModal}
						handler={setMessage}
					/>
				) : (
					<Success
						onClose={setOpenModal}
						message={message.text}
						handler={setMessage}
					/>
				)}
			</Modal>
		</div>
	);
};

export default ProductDetailForm;
