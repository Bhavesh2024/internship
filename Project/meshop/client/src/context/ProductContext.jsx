import { createContext, useState } from "react";

export const ProductContext = createContext(0);

export const fetchProductData = async(data,handler,url) =>{
  try{
    const response = await axios.get(url)
    if(response.status == 200){
        console.log( response.data);
        
        handler(prevData => ({ ...prevData, ...response.data }));
        
          // console.log("product Data" + data)
          // console.log(data)
        
        // setProductData({...productData,...response.data})
    }
  }catch(e){
    // console.log(e)
  }
}
const ProductContextProvider = ({children}) => {
  const [productData,setProductData] = useState({});

  return (
    <>
    
    <ProductContext.Provider value={{productData,setProductData}}>
        {
          children
        }
    </ProductContext.Provider>
    </>
  )
}

export default ProductContextProvider
