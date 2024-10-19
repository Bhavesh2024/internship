import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../modal/Modal";
import PermissionModal from "../modal/PermissionModal";

const UserDataTable = () => {
	const [userData, setUserData] = useState([]);
	const [openModal,setOpenModal] = useState(false);
	const [username,setUsername] = useState('');
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
		const response = await axios.get('http://localhost:5000/api/users');

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

	const handleUser = (username) =>{
		 	setOpenModal(!openModal);
			setUsername(username);
	}
	const handleRemove = async() => {
		
		try{

			const response = await axios.delete(`http://localhost:5000/api/users/${username}`)

			if(response.status == 200){
						// setUserData(response.data.user);
						fetchUserData();
						setOpenModal(false);
						// console.log('hello')
			}
		}catch(error){
			console.log(error);
		}
		
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
							<td className="p-2">{user.fname + " " + user.lname}</td>
							<td className="p-2">{user.dob}</td>
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
									onClick={() => handleUser(user.username)}
								>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Modal open={openModal} onClose={setOpenModal}>
				   { openModal &&
							<PermissionModal title={'Delete'} message={'Are You Sure to Delete'} onClose={setOpenModal} positiveAction={handleRemove} />
					 }
			</Modal>
		</div>
	);
};

export default UserDataTable;
