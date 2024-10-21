import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserActivityDropDown from "../../dropdown/UserActivityDropDown";
import Modal from "../../modal/Modal";
import Login from "../../form/Login";
import CartModal from "../../modal/CartModal";
const Navbar = () => {
	const userRef = useRef(null);
	const [dropdownToggle, setDropdownToggle] = useState(false);
	const [openLoginModal, setOpenLoginModal] = useState(false);
	const [openCart, setOpenCart] = useState(false);

	const navigate = useNavigate();
	if (userRef !== null) {
		console.log(userRef.current);
	}
	const [login, setLogin] = useState(false);
	const { username } = useParams();
	const isLogin = () => {
		if (
			localStorage.getItem("user") !== "" &&
			localStorage.getItem("user") !== null
		) {
			return setLogin(true);
		}
		return setLogin(false);
	};

	useEffect(() => {
		isLogin();
	}, []);
	const customerActivityList = [
		{
			link: "/",
			item: "Account",
		},
		{
			link: "/",
			item: "Home",
		},
	];

	const handleLoginModal = () => {
		setOpenLoginModal(!openLoginModal);
	};

	const handleCart = () => {
		if (!login) {
			alert("You are not login yet");
		} else {
			username == undefined
				? navigate(`/user/${localStorage.getItem("user")}/cart`)
				: navigate(`/user/${username}/cart`);
		}
	};
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
				{!login && (
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
				)}

				<div className="gap-3 text-xl items-center flex ">
					{/* <i className="fa-solid fa-magnifying-glass "></i> */}
					<i className="fa-solid fa-sun"></i>
					<i
						className="fa-solid fa-shopping-cart"
						onClick={handleCart}
					></i>

					{login ? (
						<i
							className="fa-solid fa-user-circle text-blue-500 text-3xl"
							id="dropdown"
							ref={userRef}
							onClick={() => setDropdownToggle(!dropdownToggle)}
						></i>
					) : (
						<i
							className="fa-solid fa-user-circle text-blue-500 text-3xl inline-block md:hidden"
							onClick={handleLoginModal}
						></i>
					)}
					{userRef !== null && (
						<UserActivityDropDown
							open={dropdownToggle}
							activityList={customerActivityList}
							classes={"bg-white text-2xl"}
						>
							<div>Hello World</div>
						</UserActivityDropDown>
					)}
				</div>
			</div>
			{openLoginModal && (
				<Modal
					open={openLoginModal}
					onClose={setOpenLoginModal}
					style={{
						position: "fixed",
						zIndex: 10,
						background: "white",
						width: "100%",
					}}
				>
					<div className="">
						<Login />
					</div>
				</Modal>
			)}
			{openCart && (
				<Modal open={openCart} onClose={setOpenCart}>
					<CartModal />
				</Modal>
			)}
			{/* <i className="fa-solid fa-bars inline-block md:hidden"></i> */}
		</nav>
	);
};

export default Navbar;
