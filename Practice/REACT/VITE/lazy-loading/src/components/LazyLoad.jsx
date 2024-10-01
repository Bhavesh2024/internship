import React from 'react'
import { Suspense } from 'react'
import { lazy } from 'react'

const LazyLoad = (importMethod) => {
  const Components = lazy(importMethod)
  return (props) =>(
    <Suspense fallback={<>Loading</>}>

      <Components {...props} />
    </Suspense>
  )
}

export default LazyLoad
