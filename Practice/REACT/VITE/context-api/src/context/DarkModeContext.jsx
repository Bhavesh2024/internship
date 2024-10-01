import { createContext, useState } from "react";

 const DarkModeContext = createContext();

 const DarkModeContextProvider = ({children}) =>{
  const [isDark,toggleMode] = useState(false);
   return(
     <>
        <DarkModeContext.Provider value={{isDark,toggleMode}}>
          {children}
        </DarkModeContext.Provider>
     </>
   )
 }

 export {DarkModeContext,DarkModeContextProvider}