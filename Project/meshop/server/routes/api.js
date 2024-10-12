const express = require("express");
const router = express.Router();
const {getAllUser,getUser,deleteUser,updateUser} = require('../controllers/user')
const {getAllProduct,getProductFromCategory,getProductFromId,addProduct,updateProduct,deleteProduct} = require('../controllers/product') 
const {addToCart,removeFromCart,getUserCart} = require('../controllers/cart')
// User Data API Route
router.get("/users",getAllUser);
router.get('/users/:username',getUser);

// User Operation API Route
router.delete('/users/:username',deleteUser);
router.put('/users/:username',updateUser);

// Product Data API
router.get('/products',getAllProduct);
router.get('/products/category/:category',getProductFromCategory);
router.get('/products/id/:productId',getProductFromId);

// Product Operation API
router.post('/products',addProduct);
router.put('/products',updateProduct);
router.delete('/products/:productId',deleteProduct);

// Product Cart API
router.get('/users/:username/cart',getUserCart);
router.post('/users/:username/cart/:productId',addToCart);
router.delete('/users/:username/cart/:productId',removeFromCart)

module.exports = router;
