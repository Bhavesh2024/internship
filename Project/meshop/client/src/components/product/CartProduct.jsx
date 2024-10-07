import React from "react";

const CartProduct = () => {
	return (
		<div className="flex gap-5">
			<div className="flex w-1/12 h-48">
				<img src="../../../images/50.jpg" alt="" className="" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="text-xl font-semibold">Motorola G85 5G</div>
				<div className="text-sm">8 GB RAM | 256 GB ROM</div>
				<div className="flex gap-2 items-baseline">
					<span className="text-md line-through">$20,999</span>
					<span className="text-xl">$16,999</span>
					<span className="text-xs">19% off</span>
				</div>
				<ul className="text-sm">
					<li>1.25 GHz pOLED Display</li>
					<li>Fast Charging</li>
					<li>4k+ Camera</li>
					<li>Combine with Split Screen</li>
				</ul>
				<div className="flex gap-3 text-sm">
					<button className="font-semibold">VIEW DETAIL</button>
					<button className="font-semibold">REMOVE</button>
				</div>
			</div>
		</div>
	);
};

export default CartProduct;
