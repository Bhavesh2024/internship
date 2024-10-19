import React from 'react'
import { useState,useEffect } from 'react';
import CartProduct from './CartProduct';
import axios from 'axios';
const Cart = () => {
 
  const [cartData,setCartData] = useState({
    username:'',
    cart:[],
  })
  const username = localStorage.getItem('user');
  const fetchCartData = async() =>{
    try{
      const response = await axios.get(`http://localhost:5000/api/users/${username}/cart`);

      if(response.status == 200){
          console.log(response.data);
          setCartData(response.data);
      }
    }catch(error){
      console.log(error); 
    }

  }
  useEffect(()=>{
    fetchCartData()
  },[])

  if(username == '') return <div>No User Found</div>;
  if(!cartData.cart.length == 0) return <div>No Products</div>
  return (
    <div className='h-fit p-3 bg-white w-full flex '>
      <div className='flex flex-col gap-4 px-3'>
      {
        cartData.cart.length != 0 ? cartData.cart.map((value,key) => (
          <>
           <CartProduct productId={value} handler={setCartData}/>
          </>
        )) : <>
         <div> No Products Added to Cart</div>
        </>
      }
      </div>
      <div>
        <div>
            <div>
               PRICE DETAILS
            </div>
            <div>
              <div>

              Price ({cartData.cart.length + 1} Item) 
              </div>
              <div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
