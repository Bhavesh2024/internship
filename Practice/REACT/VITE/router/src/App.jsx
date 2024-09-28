import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, createBrowserRouter, Router, RouterProvider, Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'
import PostCard from './components/PostCard'
import Data from './components/Data'
function App() {
  const getPostData = async () =>{
     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
     console.log(response.ok)
     return response.json();
  }
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/post",
      element:<Post />,
      children:[
        {
          path:":id",
          element:<Post />
        }
      ]
    },{
      path:"/data",
      element:<Data/>,
      loader:getPostData
    }
  ])

  
  return (
    <>

     <RouterProvider router={router}></RouterProvider>
     {/* <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/post" element={<Post />}>
            <Route path=':id' element={<PostCard />}></Route>
        // {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        {/* </Route> */}
            {/* <Route path="/data" element={<Data/>} loader={getPostData} /> */}

        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
      {/* </Routes> */}
    
     {/* </BrowserRouter> */} 
    </>
  )
}

export default App
