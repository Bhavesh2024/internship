import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDataTable = () => {
	const [userData, setUserData] = useState([]);
	const fields = [
		"ID",
		"USERNAME",
		"NAME",
		"BIRTH DATE",
		"AGE",
		"GENDER",
		"ADDRESS",
		"PHONE",
		"EMAIL",
		"PASSWORD",
		"T & C",
		"STATUS",
		"DELETE",
	];

	const fetchUserData = async () => {
		const response = await axios.get("../../../user.json");

		try {
			if (response.status === 200) {
				const data = response.data;
				setUserData(
					Object.entries(data).map(([username, value], index) => ({
						id: index + 1,
						username,
						...value,
					}))
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const joinAddress = (address) => {
		return `${address.suite}, ${address.street}, ${address.city}, ${address.state}`;
	};

	const handleRemove = (username) => {
		// Implement the remove logic here
		console.log("Remove user:", username);
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<div className="w-full p-5">
			<table className="text-nowrap table-auto border border-gray-500">
				<thead className="border-b border-red-300 p-2">
					<tr>
						{fields.map((field, index) => (
							<th key={index} className="p-2">
								{field}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{userData.map((user) => (
						<tr
							key={user.id}
							className={`border-b border-slate-500 ${
								user.id % 2 == 0 ? "bg-gray-200" : ""
							}`}
						>
							<td className="p-2">{user.id}</td>
							<td className="p-2">{user.username}</td>
							<td className="p-2">{user.name}</td>
							<td className="p-2">{user.birthDate}</td>
							<td className="p-2">{user.age}</td>
							<td className="p-2">{user.gender}</td>
							<td className="p-2">{joinAddress(user.address)}</td>
							<td className="p-2">{user.phone}</td>
							<td className="p-2">{user.email}</td>
							<td className="p-2">{user.password}</td>
							<td className="p-2">
								{user.isAgree ? "Accept" : "Decline"}
							</td>
							<td className="p-2">
								{user.isLogin ? "Active" : "Offline"}
							</td>
							<td>
								<button
									onClick={() => handleRemove(user.username)}
								>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default UserDataTable;
