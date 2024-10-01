import {Suspense,lazy } from "react"
export const LazyLoadRoute = (importMethod) =>{
    const LazyComponent = lazy(() => importMethod)
    return (props) =>(
      <Suspense fallback={<>Loading....Please Wait</>}>
         <LazyComponent {...props} />
      </Suspense>
    ) 
}