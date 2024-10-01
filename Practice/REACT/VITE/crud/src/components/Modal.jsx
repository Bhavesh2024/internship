import React, { useContext, useState } from "react";
import Form from "./Form";
import DataContext from "../context/DataContext";
const UpdateModal = ({ data }) => {
	const [formData, setFormData] = useState(data);
	return (
		<>
			<Form title={"update"} data={formData} handler={setFormData} />
		</>
	);
};
const DeleteModal = ({ id, data, handler }) => {
	const deleteUser = () => {
		const updatedData = data.filter((user) => user.id !== id);
		handler(updatedData); 
		console.log("Deleted user with id: " + id);
	};

	return (
		<>
			<div>Are You Sure to Delete?</div>
			<div className="buttons">
				<button onClick={deleteUser}>Yes</button>
				<button>No</button>
			</div>
		</>
	);
};

const Modal = ({ id, title }) => {
	console.log(title);
	const { userData, setUserData } = useContext(DataContext);
	console.log(userData);
	return (
		<>
			{userData.map(
				(value) =>
					value.id == id && (
						<div>
							{title != "update" ? (
								<DeleteModal
									id={id}
									data={userData}
									handler={setUserData}
								/>
							) : (
								<UpdateModal data={value} />
							)}
						</div>
					)
			)}
		</>
	);
};

export default Modal;
