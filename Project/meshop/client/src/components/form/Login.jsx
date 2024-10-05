import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [loginData, setLoginData] = useState({
		user: "",
		password: "",
	});

	const [togglePassword, setTogglePassword] = useState(false);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
	};

	return (
		<div>
			<form className="flex justify-center min-h-dvh items-center p-3">
				<fieldset className="flex flex-col gap-3 border p-5 rounded-md w-11/12 sm:w-10/12 md:w-2/3 lg:w-1/2 xl:w-1/3 relative">
					<legend className="text-center px-3 text-3xl font-bold">
						Login
					</legend>
					<div className="grid grid-cols-1">
						<input
							type="text"
							name={"user"}
							id="user"
							value={loginData.email}
							placeholder="Username or Email"
							className="border px-4 py-3 rounded-md"
							onChange={handleInput}
							required
						/>
					</div>
					<div className="grid grid-cols-1 relative items-center">
						<input
							type={!togglePassword ? "password" : "text"}
							id="password"
							name="password"
							placeholder="Password"
							className="border px-4 py-3 rounded-md "
							onChange={handleInput}
							required
						/>
						<i
							className={`fa-solid ${
								!togglePassword ? "fa-eye" : "fa-eye-slash"
							} absolute end-0 me-2`}
							onClick={() => setTogglePassword(!togglePassword)}
						></i>
					</div>
					<div className="my-1 px-3 flex justify-between text-xs md:text-sm">
						<Link to={"/auth/signup"}>Create New Accout</Link>
						<Link to={"#"}>Forgot Password?</Link>
					</div>
					<button
						type="submit"
						name="submit"
						className="btn bg-gray-800 w-24 py-2 rounded-md text-white m-auto"
					>
						Submit
					</button>
				</fieldset>
			</form>
		</div>
	);
};

export default Login;
