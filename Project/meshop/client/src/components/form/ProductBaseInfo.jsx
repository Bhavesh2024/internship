import React, { useEffect } from 'react'

const ProductBaseInfo = ({data,handler,specification,ref}) => {
  const handleInput = (e) =>{
    const {name,value} = e.target;
    handler({...data,[name]:value});

    
  }
  
  const finalPrice = () =>{
    if(data.price != '' && data.discount != ''){
      const price = data.price
       const discount = data.discount.includes('%') ? parseInt(data.discount.split('%')) : parseInt(data.discount);

       return parseInt(price - (price * (discount/100)));
    }
    return 0
  }

  useEffect(() =>{
    console.log(data.category)
    if(data.category != ''){

       ref.current.disabled = false;
    }
  },[data])
  return (
    <>
       <form action="" className='w-full p-4 flex flex-col gap-3 h-4/5'>
                <div>
                  <input type="text" id='product_id' name='product_id' placeholder='Product Id' value={data.product_id} className='border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400 focus:outline-none' onChange={handleInput} required/>
                </div>
                <div>
                  <input type="text" id='product_name' name='product_name' placeholder='Product Name' value={data.product_name} className='border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400' onChange={handleInput} required/>
                </div>
                <div>
                  <input type="text" id='brand' name='brand' placeholder='Brand' value={data.brand} className='border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400' onChange={handleInput} required/>
                </div>
                <div>
                  <select className={`border w-full p-3 rounded-md ${!data.category ? 'text-slate-400' : 'text-gray-600'} `} onChange={handleInput} required>
                          <option onChange={handleInput} name="category" value="" selected disabled className='text-gray-300'>Select Category</option>
                          <option onChange={handleInput} value="smartphones">Smartphone</option>
                          <option onChange={handleInput} value="smartTvs">Smart TV</option>
                          <option onChange={handleInput} value="headphones">Headphone</option>
                  </select>
                </div>
                <div>
                  <input type="text" id='price' name='price' placeholder='Price' value={data.price} className='border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400' onChange={handleInput} required/>
                </div>
                
                <div>
                  <input type="text" id='discount' name='discount' placeholder='Discount' value={data.discount} className='border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400' onChange={handleInput} required/>
                </div>
                
                <div>
                  <input type="text" id='final_price' name='final_price' placeholder='Sale Price' value={finalPrice()} className='border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400' onChange={handleInput} required readOnly/>
                </div>
                
                <div>
                  <input type="text" id='warranty' name='warranty' placeholder='Warranty' value={data.warranty} className='border w-full p-3 rounded-md text-gray-600 placeholder:text-slate-400' onChange={handleInput} required/>
                </div>
                <div>
                  <textarea name="description" id="description" className='w-full border p-2' rows={4} value={data.description} placeholder='Write description...'></textarea>
                </div>
                <div>
                   <button type="submit" className='text-sm bg-slate-900 text-white p-3 rounded-md px-6 flex mx-auto '>Submit</button>
                </div>
       </form>
    </>
  )
}

export default ProductBaseInfo
