import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { initUserCartData, deleteFromCart } from '//features/cartSlice'; // Update with the correct path to your cart slice
import { initUserCartData,deleteFromCart } from '../../redux/features/cartSlice';
import CartProduct from './CartProduct';
import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  const username = localStorage.getItem('user');
  const [userCartDetail,setUserCartDetail] = useState({
    price:'',
    discount:'',
    totalPrice:''
  })
  // Get the cart data from the Redux store
  const cartData = useSelector((state) => state.productCart[username] || { cart: [] });

  const getCartDetail = async()=>{
    try{
      // if(cartData.cart.length != 0){
        console.log('cart' + cartData.cart)
        const respnonse = await axios.post(`http://localhost:5000/api/user/${username}/cart/detail`,{cart:cartData.cart});
        if(respnonse.status == 200){
           console.log(respnonse.data);
            setUserCartDetail(respnonse.data.detail);
        }

    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    if (username) {
      dispatch(initUserCartData({ username }));
    }
  }, [username, dispatch]);
  
  useEffect(() =>{
    
    if(cartData.cart.length !== 0){
      getCartDetail();
    }
  },[cartData])
  if (!username) return <div>No User Found</div>;
  if (cartData.cart.length === 0) return <div className='h-60vh flex items-center justify-center text-6xl font-semibold text-gray-700'>No Products</div>;

  const handleDelete = (productId) => {
    dispatch(deleteFromCart({ productId, username }));
  };

  return (
    <div className='h-70vh p-3 bg-white w-full flex overflow-auto scrollbar-none'>
      <div className='flex flex-col gap-4 px-3'>
        {
          cartData.cart.map((productId) => (
            <CartProduct
              key={productId} // Use productId as the key for uniqueness
              productId={productId}
              onDelete={() => handleDelete(productId)} // Pass the productId to delete
            />
          ))
        }
      </div>
      <div className='bg-slate-100 w-1/5 h-fit p-4'>
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-xl mb-3'>PRICE DETAILS</div>
          <div className='flex justify-between'>
            <div>Price ({cartData.cart.length} Item{cartData.cart.length > 1 ? 's' : ''})</div>
            <div className='text-lg'>
              {/* Add price calculations or details here */}
              ₹{userCartDetail.price}
            </div>
          </div>
          <div className='flex justify-between'>
            <div>Discount </div>
            <div className='ps-3 text-sm text-blue-700'>
              {/* Add price calculations or details here */}
             - ₹{userCartDetail.discount}
            </div>
          </div>
          <div className='bg-gray-50 flex items-center justify-between py-3 px-2'>
            <div className='text-lg font-semibold'>Total Amount</div>
            <div className='text-lg text-gray-500'>
              {/* Add price calculations or details here */}
             ₹{userCartDetail.totalPrice}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
