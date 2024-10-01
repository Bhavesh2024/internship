import React from 'react'
import { useState,createContext } from 'react'


export  const RouteContext = createContext('');
const RouteContextProvider = ({children}) => {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
        <RouteContext.Provider value={{isLogin,setLogin}}>
              {children}
        </RouteContext.Provider>
    </>
  )
}

export default RouteContextProvider
