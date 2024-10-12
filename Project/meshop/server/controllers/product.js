const fs = require('fs')
const getAllProduct = async (req,res) => {
		const result = fs.readFileSync('./data/product.json')
		const products = JSON.parse(result);
		if(products){
			return res.status(200).json(products);
		}
		return res.status(404).json("No Product Found")
};

const getProductFromCategory = async (req,res) => {
	const category = req.params.category;
	console.log(category)
	const result = fs.readFileSync('./data/product.json')
	const products = JSON.parse(result);
	if(products){
		 categoryProducts = Object.entries(products).filter(([key,value]) => key == category);
		return res.status(200).json(categoryProducts[0][1]);
	}
	return res.status(404).json("No Product Found")
};

const getProductFromId = async (req,res) => {
	 const id = req.params.productId;
	 console.log(id)
	 const result = fs.readFileSync('./data/product.json')
	 const products = JSON.parse(result);
	 if(products){
			product = Object.entries(products)
			.map(([key, value]) => {
				
				const matchedProducts = value.filter(product => product.product_id === id);
				
				if (matchedProducts.length > 0) {
					return [key, matchedProducts];
				}
				
				return null;
			})
			.filter(item => item !== null);;
			console.log(product)
			if(product.length > 0){
				return res.status(200).json(product[0][1][0]);
			}
	 }
	 return res.status(404).json("No Product Found")
};

const addProduct = async (req,res) => {};

const updateProduct = async (req,res) => {};

const deleteProduct = async (req,res) => {};
module.exports = {
	getAllProduct,
	getProductFromCategory,
	getProductFromId,
	addProduct,
	updateProduct,
	deleteProduct,
};
