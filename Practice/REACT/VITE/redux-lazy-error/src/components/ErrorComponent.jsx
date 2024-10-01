import React from 'react'
import {ErrorBoundary} from "react-error-boundary"
const ErrorComponent = ({error,resetErrorBoundary}) => {
  return (
    <div>
       <h1>Something Went Wrong : {error.message}</h1>
       <button onClick={resetErrorBoundary}>Try Again</button> 
    </div>
  )
}

export default ErrorComponent
