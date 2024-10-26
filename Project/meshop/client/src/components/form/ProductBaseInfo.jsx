import React, { useEffect, useRef, useState } from "react";
import { headphone, smartPhone, smartTv } from "./productDefault";

const ProductBaseInfo = ({
	data,
	handler,
	specification,
	refs,
	submitHandler,
}) => {
	
	const [image,setImage] = useState(''); 
	const fileRef = useRef(0);
	const handleInput = (e) => {
		const { name, value } = e.target;

		handler({ ...data, [name]: value });
	};



	const handleUploadFile = (e) =>{
		fileRef.current.click();
	}

	const handleFileChange = (e) =>{
		const files = e.target.files[0];

		console.log('files' + files)
		if(files){

			const reader = new FileReader();
			console.log(reader)
			 reader.onloadend = () => {
				console.log(reader.result)
				 setImage(reader.result);  // Set the image source when file is loaded
				 console.log(fileRef.current.value);
				 handler({...data,image:files});


			 };
			 reader.readAsDataURL(files);  // Convert the file to a base64 URL
		}
    
	}
	const finalPrice = () => {
		if (data.price != "" && data.discount != "") {
			const price = data.price;
			const discount = data.discount.includes("%")
				? parseInt(data.discount.split("%"))
				: parseInt(data.discount);

			// handler({...data,final_price:parseInt(price - price * (discount / 100))})
			return parseInt(price - price * (discount / 100));
		}
		return 0;
	};

	useEffect(() => {
		console.log(data.category);
		if (data.category != "") {
			refs.current.disabled = false;
			switch (data.category) {
				case "smartphone":
					return specification(smartPhone);
				case "smartTv":
					return specification(smartTv);
				case "headphone":
					return specification(headphone);
			}
		} else {
			refs.current.disabled = true;
		}
	}, [data]);

	useEffect(()=>{
		console.log(image)
	},[image])
	return (
		<>
			<form
				action=""
				className="w-full p-4 flex flex-col gap-3 h-4/5"
				onSubmit={submitHandler}
			>
			
				<div className="text-center border rounded-md p-3" onClick={handleUploadFile}>
					{
						image ? <img src={image} className="flex m-auto"></img> : 
				<i class="fa-solid fa-upload text-8xl text-indigo-200 text-center" ></i>
					}
				<p className="text-sm my-2 text-gray-400">Upload Product Image</p>
					<input type="file" name="image" id="image" ref={fileRef} hidden={true}  onChange={handleFileChange} required/>
				</div>
				<div>
					<input
						type="text"
						id="product_id"
						name="product_id"
						placeholder="Product Id"
						value={data.product_id}
						className="border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400 focus:outline-none"
						onChange={handleInput}
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="product_name"
						name="product_name"
						placeholder="Product Name"
						value={data.product_name}
						className="border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400"
						onChange={handleInput}
						required
					/>
				</div>
				<div>
					<input
						type="text"
						id="brand"
						name="brand"
						placeholder="Brand"
						value={data.brand}
						className="border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400"
						onChange={handleInput}
						required
					/>
				</div>
				<div>
					<select
						className={`border w-full p-3 rounded-md ${
							!data.category ? "text-slate-400" : "text-gray-600"
						} `}
						name="category"
						onChange={handleInput}
						value={data.category}
						required
					>
						<option
							name="category"
							value=""
							selected
							disabled
							className="text-gray-300"
						>
							Select Category
						</option>
						<option value="smartphone">Smartphone</option>
						<option value="smartTv">Smart TV</option>
						<option value="headphone">Headphone</option>
					</select>
				</div>
				<div>
					<input
						type="number"
						id="price"
						name="price"
						min={0}
						placeholder="Price"
						value={data.price}
						className="border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400"
						onChange={handleInput}
						required
					/>
				</div>

				<div>
					<input
						type="number"
						id="discount"
						name="discount"
						min={0}
						max={100}
						placeholder="Discount"
						value={data.discount}
						className="border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400"
						onChange={handleInput}
						required
					/>
				</div>

				<div>
					<input
						type="number"
						id="final_price"
						name="final_price"
						placeholder="Sale Price"
						// min={100}
						value={finalPrice()}
						className="border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400"
						onChange={handleInput}
						required
						readOnly
					/>
				</div>
				<div>
				<select
						className={`border w-full p-3 rounded-md ${
							!data.stock_status ? "text-slate-400" : "text-gray-600"
						} `}
						name="stock_status"
						onChange={handleInput}
						value={data.stock_status}
						required
					>
						<option value="" selected disabled>Stock Status</option>
						<option name="stock_status" value="In Stock" selected>In Stock</option>
						<option name="stock_status" value="Out of Stock">Out of Stock</option>
					</select>
				</div>
				<div>
					<input
						type="text"
						id="warranty"
						name="warranty"
						placeholder="Warranty"
						value={data.warranty}
						className="border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400"
						onChange={handleInput}
						required
					/>
				</div>
				<div>
					<textarea
						name="description"
						id="description"
						className="w-full border p-2"
						rows={4}
						value={data.description}
						placeholder="Write description..."
						onChange={handleInput}
					></textarea>
				</div>
				<div>
					<button
						type="submit"
						className="text-sm bg-slate-900 text-white p-3 rounded-md px-6 flex mx-auto "
						name="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default ProductBaseInfo;
