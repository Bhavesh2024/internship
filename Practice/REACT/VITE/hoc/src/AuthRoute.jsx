import React from 'react'
import { useState } from 'react'
import Error from './components/Error';

const AuthRoute = (Dashboard) => {
    return (props) =>{
      const isAuthenticated =  localStorage.getItem('isLogin') == 'true';

      if(!isAuthenticated){
        return <Error />
      }
      
      return <Dashboard {...props}/>
    }

  }


export default AuthRoute
