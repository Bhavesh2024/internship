import React from "react";
import { Link } from "react-router-dom";
const ProductCard = () => {
	return (
		// <div className="flex flex-col w-1/6 border rounded-t-lg">
		// 	<div className="relative">
		// 		<div>
		// 			<img
		// 				src="../../../images/50.jpg "
		// 				alt=""
		// 				className="h-full w-full rounded-t-lg "
		// 			/>
		// 		</div>
		// 		<div className="bg-opacity-40 border bg-slate-900 text-yellow-300 inline p-1 px-2 absolute text-xs rounded-full top-0 end-0 me-2 mt-2 rotate-12">
		// 			25% off
		// 		</div>
		// 	</div>
		// 	<div className="px-3 mt-2">
		// 		<div className="flex justify-between ">
		// 			<h3 className="text-xl font-bold">Product 1</h3>
		// 			<span>$78890</span>
		// 		</div>
		// 		<div className="text-sm">
		// 			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
		// 			autem laudantium explicabo quam voluptatibus deserunt, nulla
		// 			odio temporibus est quos, rerum repellat! Assumenda quidem
		// 			beatae in ducimus quo! Praesentium, in?
		// 		</div>
		// 		<div className="flex justify-between py-3">
		// 			<Link
		// 				to={"/"}
		// 				className=" p-2 bg-rose-400 text-white px-5 rounded-lg"
		// 			>
		// 				View
		// 			</Link>
		// 			<button className="bg-slate-900 text-gray-200 p-2 px-3 rounded-lg">
		// 				Add To Cart
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
		<div className="border w-1/6 flex flex-col justify-center items-center bg-[url('../../../images/card-bg.jpg')]">
			<div className="p-5">
				<img
					src="../../../images/50.jpg"
					alt=""
					className="w-11/12 h-48 flex mx-auto"
				/>
			</div>
			<div className="text-center">
				<div className="text-lg font-semibold">
					<Link to="/"> Product Name </Link>
				</div>
				<div>
					<span className="text-xl font-semibold text-slate-600">
						$97238.21
					</span>
					<span className="text-md underline-offset-4 text-slate-500 line-through">
						&nbsp;&nbsp;$152750
					</span>
					{/* <div>
						<span className="text-xs border rounded-full inline-block p-1 px-2 bg-gray-300">
							25% off
						</span>
					</div> */}
				</div>
				<div className="text-sm px-3 my-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In
					veritatis quaerat necessitatibus consectetur quam inventore,
					dolor, ut, nesciunt blanditiis corrupti enim aspernatur
					provident rerum eaque amet dolore ullam perferendis
					consequatur.
				</div>
				<button className=" bg-gradient-to-r from-slate-900 to-gray-800 rounded-full py-2 px-5 text-white inline-block w-fit text-sm my-3">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
