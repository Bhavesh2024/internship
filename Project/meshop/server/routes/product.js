const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/:category/:imageFile',(req,res) =>{
  const {category,imageFile} = req.params;
  const imagePath = `e:/internship/project/meshop/server/images/products/${category}/${imageFile}`;
   return res.sendFile(imagePath,(e) => console.log(e))
})

module.exports = router