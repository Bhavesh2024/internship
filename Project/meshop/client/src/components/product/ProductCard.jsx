import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
const ProductCard = ({productId}) => {
	const [productData,setProductData] = useState({});
	const fetchProductData = async() =>{
		try{
			const response = await axios.get(`http://localhost:5000/api/products/id/${productId}`)
			if(response.status == 200){
					console.log( response.data);
					
					setProductData(prevData => ({ ...prevData, ...response.data }));

						 if(Object.values(productData).length != 0){

							 console.log("productData" + productData)
							 console.log(productData.image)
						 }
					
			}
		}catch(e){
			// console.log(e)
		}
	}
	useEffect(() =>{
			fetchProductData();
			
	},[])
	// fetchProductData()
	return (
		<div className="border w-full md:w-1/6 flex flex-col justify-center items-center bg-[url('../../../images/card-bg.jpg')]">
			<div className="p-5">
				<img
					src={`${productData !== null ? productData.image : ""}`}
					alt=""
					className="w-11/12 h-48 flex mx-auto"
				/>
			</div>
			<div className="text-center">
				<div className="text-lg font-semibold">
					<Link to="/"> {productData.product_name} </Link>
				</div>
				<div>
					<span className="text-xl font-semibold text-slate-600">
						{productData.price}
					</span>
					<span className="text-md underline-offset-4 text-slate-500 line-through">
						&nbsp;{productData.final_price}
					</span>
					{/* <div>
						<span className="text-xs border rounded-full inline-block p-1 px-2 bg-gray-300">
							25% off
						</span>
					</div> */}
				</div>
				<div className="text-sm px-3 my-1">
					{productData.description}
				</div>
				<button className=" bg-gradient-to-r from-slate-900 to-gray-800 rounded-full py-2 px-5 text-white inline-block w-fit text-sm my-3">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
