import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className=" flex justify-between md:justify-around items-center h-20  bg-gray-200 px-4">
			<div className="flex items-center gap-5">
				<div className="logo">
					<h1 className="text-4xl font-mono font-bold">MeShop</h1>
				</div>
			</div>
			<div className=" gap-5 items-center flex ">
				{/* <div className="relative bg-white rounded-full items-center hidden md:flex ">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search products.."
						className="py-2 px-4 bg-transparent focus:outline-none placeholder:text-xs"
					/>
					<i className="fa-solid fa-magnifying-glass me-3"></i>
				</div> */}
				<div className="gap-3 hidden md:flex">
					<Link
						to={"/auth/signup"}
						className="bg-sky-500 text-white py-2 px-4 rounded-full text-sm"
					>
						Sign Up
					</Link>
					<Link
						to={"/auth/login"}
						className="bg-rose-500 text-white py-2 px-4 rounded-full text-sm"
					>
						Login
					</Link>
				</div>
				<div className="gap-3 text-xl items-center flex ">
					{/* <i className="fa-solid fa-magnifying-glass "></i> */}
					<i className="fa-solid fa-sun"></i>
					<i className="fa-solid fa-shopping-cart"></i>
					<i className="fa-solid fa-user-circle text-blue-500 text-3xl"></i>
				</div>
			</div>
			{/* <i className="fa-solid fa-bars inline-block md:hidden"></i> */}
		</nav>
	);
};

export default Navbar;
