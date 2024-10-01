import React from 'react'
import { useContext } from 'react'
import { RouteContext } from '../context/RouteContextProvider'
import Error from './Error'

const Dashboard = () => {
  // const {isLogin} = useContext(RouteContext)
  return (
    <div>
        {/* { isLogin ? 'Welcome' : <Error />} */}
        Welcome to Dashboard
    </div>
  )
}

export default Dashboard
