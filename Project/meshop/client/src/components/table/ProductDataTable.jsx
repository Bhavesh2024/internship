import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import AdminTableTool from "../layout/toolbar/AdminTableTool";
import { useNavigate } from "react-router-dom";
import { ProductTableContext } from "../../context/ProductTableContext";
import Modal from "../modal/Modal";
import PermissionModal from "../modal/PermissionModal";

const ProductDataTable = () => {

	const navigate = useNavigate();
	const {fetchProducts,productTableData,setProductTableData} = useContext(ProductTableContext);
	// const [productData, setProductData] = useState({});
	const [alertModal,setAlertModal] = useState(false);
	const [productId,setProductId] = useState('');
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
	
	useEffect(() => {
		fetchProducts();
	}, []);
	// if (productData.length != 0) {
	// 	console.log("data : " + productData[0].product_id);
	// }

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

	const removeProduct = async (productId) =>{
    console.log(productId);
		try{
		  const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
			if(response.status == 200){
					console.log(response);
					setAlertModal(!alertModal)
					fetchProducts()
			}
	 }catch(error){
		 console.log(error.response.data.message)
	 }
	}
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
	if(!productTableData){
	return <div>Loading.....</div>
  } else{
		// console.log(productData[0].smartphones[0].product_id)
	}
	return (<>
		
			
		<div className="w-full max-w-full p-5">
			<AdminTableTool />
	
			<table className="text-nowrap table-auto border border-gray-500 mt-20">
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
							<th className="border px-4 max-w-96" style={{width:'500px !important'}}>
								{value}
							</th>
						)
					)}
				</thead>
				<tbody className="text-center">
					{Object.values(productTableData).map((value,key) => (
					  value.map((value,key) =>(
						<tr>
							<td className="border-b border-gray-400 p-3">
								{value.product_id}
							</td>
							<td className="border-b border-gray-400 p-3">
								<img src={value.image} alt="" />
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
							<td className="border-b border-gray-400 p-3 text-start" style={{width:'500px !important'}}>
								{value.description.slice(0,100)}
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
								<button onClick={() => navigate(`/product/${value.product_id}`)} className="text-white bg-blue-500 p-2 px-6 rounded-md ">View</button>
							</td>
							<td className="border-b border-gray-400 p-3">
								<button className="bg-yellow-600 text-white p-2 px-6 rounded-md">Edit</button>
							</td>
							<td className="border-b border-gray-400 p-3">
								<button onClick={() => {
									setProductId(value.product_id)
									setAlertModal(!alertModal)
									} } className="bg-red-600 text-white p-2 px-4 rounded-md">Remove</button>
							</td>
						</tr>
				))
					))}
				</tbody>
			</table>
		</div>
		<Modal open={alertModal} onClose={setAlertModal}>
			{
					productId != '' && 
							<PermissionModal onClose={setAlertModal} title={'Delete'} message={'Are You Sure to Delete ?'} positiveAction={() => removeProduct(productId)}/>
			}
			</Modal>
	</>
	);
};

export default ProductDataTable;
