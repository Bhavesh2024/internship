import React, { useState } from "react";
import Modal from "../../modal/Modal";
import ProductDetailForm from "../../form/ProductDetailForm";
const AdminTableTool = () => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="flex justify-between my-3 px-4">
			<h1 className="text-2xl font-semibold">Product</h1>
			<div className="flex gap-2">
				<button
					className="bg-blue-500 text-white p-2 px-4 rounded-md"
					onClick={() => setOpenModal(!openModal)}
				>
					<i className="fa-solid fa-plus text-sm"></i> Add
				</button>
				<select
					name="filter"
					id="filter"
					value={""}
					className="border px-1"
				>
					<option value="" selected disabled>
						Select Filter
					</option>
					<option value="All" name="">
						All
					</option>
					<option value="SmartTv" name="filter">
						Smart TV
					</option>
					<option value="Smartphone" name="filter">
						Smart Phone
					</option>
					<option value="Headphone" name="filter">
						Headphone
					</option>
				</select>
			</div>
			<Modal open={openModal} onClose={setOpenModal}>
				<ProductDetailForm />
			</Modal>
		</div>
	);
};

export default AdminTableTool;
