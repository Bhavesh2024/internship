import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Table from '../components/Table'
import UserData from '../components/UserData'
import AllUser from '../components/AllUser'
const RouteConfig = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Table/>}>
                  <Route path='users/' element={<AllUser/>} />
                  <Route path='users/:id' element={<UserData />} />
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig
