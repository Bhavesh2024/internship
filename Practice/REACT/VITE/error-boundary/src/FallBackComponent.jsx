import React from 'react'

const FallBackComponent = ({error,resetErrorBoundary}) => {
  return (
    <div>
       <h1>Something Went Wrong : {error.message}</h1>
       <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

export default FallBackComponent
