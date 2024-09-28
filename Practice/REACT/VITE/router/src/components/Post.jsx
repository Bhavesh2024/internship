import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import PostCard from './PostCard';
import { useEffect } from 'react';
import { useState } from 'react';

const Post = () => {
  const params = useParams();
 
  return (
    <div>
      Post page
      <h1>Id : {params.id}</h1>
      <Outlet />
    </div>
  )
}

export default Post
