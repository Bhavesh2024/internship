import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ErrorBoundary} from 'react-error-boundary'
import Home from './Home'
import FallBackComponent from './FallBackComponent'
function App() {

  return (
    <>
     <ErrorBoundary FallbackComponent={FallBackComponent}>
        <Home />
     </ErrorBoundary>
    </>
  )
}

export default App
