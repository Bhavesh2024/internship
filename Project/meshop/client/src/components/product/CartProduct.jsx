import React, { useEffect, useState } from "react";
import { fetchProductData } from "./ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cart from "../../redux/cart";
import { deleteFromCart } from "../../redux/features/cartSlice";

const CartProduct = ({productId,handler}) => {
	const [cartProductData,setCartProductData] = useState(null)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() =>{
		fetchProductData(cartProductData,setCartProductData,productId);
	},[])

	const removeCartProduct = () =>{
		 const username = localStorage.getItem('user');
		 console.log(username,productId);
		 dispatch(deleteFromCart({productId,username,handler}));
	}
	if(cartProductData == null) return <div> Loading ....</div>
	return (
		<div className="flex gap-5">
			{
					(cartProductData !== null) && <>	<div className="flex w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 h-48">
				<img src={cartProductData.image} alt="" className="" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="text-xl font-semibold">{cartProductData.product_name}</div>
				{/* <div className="text-sm">8 GB RAM | 256 GB ROM</div> */}
				<div className="flex gap-2 items-baseline">
					<span className="text-md line-through">{cartProductData.price}</span>
					<span className="text-xl">{cartProductData.final_price}</span>
					<span className="text-xs text-white bg-slate-900 rounded-full p-1 px-2">{cartProductData.discount} off</span>
				</div>
				<ul className="text-sm">
					{/* <li>1.25 GHz pOLED Display</li>
					<li>Fast Charging</li>
					<li>4k+ Camera</li>
					<li>Combine with Split Screen</li> */}
					{
						cartProductData.detailed_specifications.map(value => (
							<>
							  <li>{Object.values(value).map(value => (value))}</li>
							</>
						))
					}
				</ul>
				<div className="flex gap-3 text-sm">
					<button className="font-semibold" onClick={() => navigate(`/product/${cartProductData.product_id}`)}>VIEW DETAIL</button>
					<button className="font-semibold" onClick={removeCartProduct}>REMOVE</button>
				</div>
			</div>
			</>
}
		</div>
	);
};

export default CartProduct;
