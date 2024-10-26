import React, { createContext, useState } from 'react'
import axios from 'axios';
export const ProductTableContext = createContext(0); 
const ProductTableContextProvider = ({children}) => {
  const [productTableData,setProductTableData] = useState({});

  const fetchProducts = async () => {
		
		try {
			const response = await axios.get("http://localhost:5000/api/products");
			if (response.status == 200) {
				const data = response.data;
				
				setProductTableData(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
  return (
    <ProductTableContext.Provider value={{productTableData,setProductTableData,fetchProducts}}>
        {children}
    </ProductTableContext.Provider>
  )
}

export default ProductTableContextProvider
