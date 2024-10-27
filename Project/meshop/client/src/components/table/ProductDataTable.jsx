import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import AdminTableTool from "../layout/toolbar/AdminTableTool";
import { useNavigate } from "react-router-dom";
import { ProductTableContext } from "../../context/ProductTableContext";
import Modal from "../modal/Modal";
import PermissionModal from "../modal/PermissionModal";

const ProductDataTable = () => {
	const navigate = useNavigate();
	// const pagination =
	const { fetchProducts, productTableData, setProductTableData } =
		useContext(ProductTableContext);
	// const [productData, setProductData] = useState({});
	const [alertModal, setAlertModal] = useState(false);
	const [productId, setProductId] = useState("");
	// const [pagination, setPagination] = useState([]);
	const [slicedRowData, setSlicedRowData] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isOverFlow, setIsOverFlow] = useState(true);
	const [pageIndex, setPageIndex] = useState(0);
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

	const createPagination = (data, rows) => {
		const isObject = typeof data == "object";

		if (isObject) {
			// console.log(Object.values(data));
			const dataArr = Object.values(data);
			let totalDataLength = 0;
			const dividedDataArr = [];
			dataArr.map((value, index) => {
				totalDataLength = totalDataLength + value.length;
			});
			if (totalDataLength > 5) {
				const remainingLength = totalDataLength % rows;
				dataArr.forEach((value, index) => {
					let minIndex = 0,
						maxIndex = rows;
					value.map((data, index) => {
						if (minIndex == index) {
							// console.log("data : ");
							if (dividedDataArr.length != 0) {
								dividedDataArr.map((arr) => {
									if (
										arr.length < rows &&
										arr.length != rows
									) {
										let currentIndex = index;
										while (arr.length != rows) {
											arr.push(value[currentIndex]);
											currentIndex += 1;
										}
										minIndex = currentIndex;
										maxIndex = rows + minIndex;
										// while (arr.length < rows) {
										// 	// arr.push(minIndex,arr.length);
										// 	// arr.push(value.slice(index));
										// 	// index = index + 1;
										// 	// minIndex = minIndex + 1;
										// }
									}
								});
							}

							dividedDataArr.push(
								value.slice(minIndex, maxIndex)
							);
							// pagination.push(dividedDataArr.length);
							minIndex = maxIndex;
							maxIndex =
								minIndex < value.length
									? minIndex + rows
									: minIndex + (value.length % rows);
						}
					});
					setSlicedRowData(dividedDataArr);
					// setPagination(pagination.push(dividedDataArr.length));
				});
			} else {
				setPagination([]);
			}
		}

		console.log(slicedRowData);
	};

	const initPagination = (length) => {
		console.log(length);
		for (let i = 0; i < length; i++) {
			if (length > 5) {
				for (let i = 0; i < 3; i++) {
					console.log(i);
					return (
						<>
							<button
								className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 ${
									i == activeIndex
										? "bg-indigo-500 text-white"
										: ""
								}`}
								onClick={() => setActiveIndex(i)}
							>
								{i + 1}
							</button>
						</>
					);
				}
				return (
					<button
						className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 ${
							i == activeIndex ? "bg-indigo-500 text-white" : ""
						}`}
						onClick={() => {
							setPageIndex((p) => p + 3);
							setActiveIndex(pageIndex);
						}}
					>
						...
					</button>
				);
			} else {
				return (
					<>
						<button
							className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 ${
								i == activeIndex
									? "bg-indigo-500 text-white"
									: ""
							}`}
							onClick={() => setActiveIndex(i)}
						>
							{i + 1}
						</button>
					</>
				);
			}
		}
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	useEffect(() => {
		if (Object.keys(productTableData).length !== 0) {
			createPagination(productTableData, 5);
		}
	}, [productTableData]);

	const joinSpecifications = (productSpecifications) => {
		let specifications = [];
		// console.log(productSpecifications);

		// productSpecifications.map((value, key) => joinSpecifications(value));
		productSpecifications.map((value) =>
			Object.entries(value).map(([key, value]) => (
				<>
					{/* {console.log(value)} */}
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

	const removeProduct = async (productId) => {
		console.log(productId);
		try {
			const response = await axios.delete(
				`http://localhost:5000/api/products/${productId}`
			);
			if (response.status == 200) {
				console.log(response);
				setAlertModal(!alertModal);
				fetchProducts();
			}
		} catch (error) {
			console.log(error.response.data.message);
		}
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

	useEffect(() => {
		if (slicedRowData.length !== 0) {
			if (pageIndex <= slicedRowData.length - 1) {
				setActiveIndex(pageIndex);
			} else {
				setPageIndex(slicedRowData.length - 3);
			}
		}
	}, [pageIndex]);
	if (!productTableData) {
		return <div>Loading.....</div>;
	} else {
		// console.log(productData[0].smartphones[0].product_id)
	}
	return (
		<>
			<div className="w-full max-w-full p-5">
				<AdminTableTool />

				<table className="text-nowrap table-auto border border-gray-500 mt-20">
					<thead>
						{fields.map((value, index) =>
							value == "PRICE" ? (
								<th colSpan={2} className="border " key={index}>
									<th className="text-center border block">
										PRICE
									</th>
									<tr key={index}>
										<th className="px-3 border">
											ORIGINAL
										</th>
										<th className="px-3 border w-full">
											SALE
										</th>
									</tr>
								</th>
							) : (
								<th
									className="border px-4 max-w-96"
									style={{ width: "500px !important" }}
									key={index}
								>
									{value}
								</th>
							)
						)}
					</thead>

					<tbody className="text-center">
						{slicedRowData.length !== 0 &&
							slicedRowData.map(
								(value, index) =>
									index == activeIndex &&
									value.map((value, index) => (
										// value.map((value, index) => (
										<>
											{console.log(value)}
											<tr key={index}>
												<td className="border-b border-gray-400 p-3">
													{value.product_id}
												</td>
												<td className="border-b border-gray-400 p-3">
													<img
														src={value.image}
														alt=""
													/>
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
												<td
													className="border-b border-gray-400 p-3 text-start"
													style={{
														width: "500px !important",
													}}
												>
													{value.description.slice(
														0,
														100
													)}
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
													<button
														onClick={() =>
															navigate(
																`/product/${value.product_id}`
															)
														}
														className="text-white bg-blue-500 p-2 px-6 rounded-md "
													>
														View
													</button>
												</td>
												<td className="border-b border-gray-400 p-3">
													<button className="bg-yellow-600 text-white p-2 px-6 rounded-md">
														Edit
													</button>
												</td>
												<td className="border-b border-gray-400 p-3">
													<button
														onClick={() => {
															setProductId(
																value.product_id
															);
															setAlertModal(
																!alertModal
															);
														}}
														className="bg-red-600 text-white p-2 px-4 rounded-md"
													>
														Remove
													</button>
												</td>
											</tr>
										</>
									))
							)}
					</tbody>
				</table>
			</div>
			<div className="flex flex-row-reverse items-center justify-between px-5">
				<div className="text-slate-500 text-sm">
					Showing result {activeIndex + 1} to {slicedRowData.length}
				</div>
				<div className="flex">
					<button
						className="px-2 text-slate-500 text-lg border border-slate-300 border-e-0 tracking-tighter disabled:text-slate-300"
						onClick={() => {
							setActiveIndex((current) => current - 1);
							if (pageIndex > 0) {
								setPageIndex((p) => p - 1);
							}
						}}
						disabled={activeIndex == 0}
					>
						&lt;&lt;
					</button>
					{slicedRowData.length !== 0 &&
						slicedRowData.map((value, index) =>
							slicedRowData.length < 6 ? (
								<button
									className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 ${
										index == activeIndex
											? "bg-indigo-500 text-white"
											: ""
									}`}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
							) : (
								""
							)
						)}

					{slicedRowData.length > 5 && (
						<>
							<button
								className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 ${
									pageIndex == activeIndex
										? "bg-indigo-500 text-white"
										: ""
								}`}
								onClick={() => setActiveIndex(pageIndex + 1)}
							>
								{pageIndex + 1}
							</button>

							<button
								className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 ${
									pageIndex + 2 == activeIndex
										? "bg-indigo-500 text-white"
										: ""
								}`}
								onClick={() => setActiveIndex(pageIndex + 2)}
							>
								{pageIndex + 2}
							</button>

							<button
								className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 ${
									pageIndex + 3 == activeIndex
										? "bg-indigo-500 text-white"
										: ""
								}`}
								onClick={() => setActiveIndex(pageIndex + 3)}
							>
								{pageIndex + 3}
							</button>

							<button
								className={`p-2 px-4 border border-e-0 border-slate-400 text-slate-500 disabled:text-slate-400 `}
								onClick={() => {
									if (pageIndex <= slicedRowData.length - 5) {
										setPageIndex((p) => p + 1);
									}
								}}
								disabled={pageIndex >= slicedRowData.length - 3}
							>
								...
							</button>
						</>
					)}
					<button
						className="px-2 text-slate-500 text-lg border border-slate-400 tracking-tighter disabled:text-slate-300"
						onClick={() => {
							setActiveIndex((current) => current + 1);
							if (pageIndex <= slicedRowData.length - 5) {
								setPageIndex((p) => p + 1);
							}
							// setPageIndex((p) => p + 1);
						}}
						disabled={activeIndex == slicedRowData.length - 1}
					>
						&gt;&gt;
					</button>
				</div>
			</div>
			<Modal open={alertModal} onClose={setAlertModal}>
				{productId != "" && (
					<PermissionModal
						onClose={setAlertModal}
						title={"Delete"}
						message={"Are You Sure to Delete ?"}
						positiveAction={() => removeProduct(productId)}
					/>
				)}
			</Modal>
		</>
	);
};

export default ProductDataTable;
