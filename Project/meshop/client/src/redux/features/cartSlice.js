import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const cartSlice = createSlice({
  name:'cart',
  initialState:[],
  reducers:{
    addToCart: (state,action) =>{
      // console.log('product added')
      const {productId,username} = action.payload;
      console.log(productId)
      console.log(username)
      // await fetch(`http://localhost:5000/api/users/${username}/cart/${productId}`,{
      //   method:'POST',
      //   body:JSON.stringify(action.payload),
      // }).then(res =>{
      //   if(res.status == 'OK' || res.status == 200){
      //      console.log('product Added');
      //   }
      // }).catch(e => console.error(e))
      try{
        const response = axios.post(`http://localhost:5000/api/users/${username}/cart/${productId}`,{username:username,product_id:productId});
        if(response.status == 200){
          console.log('product added');
        }
      }catch(e){
        console.log(e);
      }
      
    },
    deleteFromCart:(state,action)=>{
      const {productId,username,handler} = action.payload
      console.log(productId);
      console.log(username);
       try{
          axios.delete(`http://localhost:5000/api/users/${username}/cart/${productId}`).then(res => {
            if(res.status == 'OK' || res.status == 200){
              console.log('Product Deleted Successfully');
              console.log(res.data);
            }
          })
       }catch(e){
          console.log(e);
       }
    },
    productCount:(state)=>{

    },
  }
})

export const { addToCart,deleteFromCart,productCount} = cartSlice.actions;

export default cartSlice.reducer