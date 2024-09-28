import React,{useEffect} from 'react'
import "../App.css"
import { useParams } from 'react-router-dom'
import { useState } from 'react';
const PostCard = () => {
  const params = useParams();
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(data => data.json()).then(data => setData(data) )

  },[])
  return (
    <div>
       {
        (data.length == 0) ? <p>Loading...</p> :
        <div className="post-card">
            <div className="post-header">
                    <span className="id">{data.id}</span>
                    <span className="title">
                        {data.title}
                    </span>
            </div>
            <div className="post-body">
              <p>{data.body}</p>
            </div>
        </div>
       }
    </div>
  )
}

export default PostCard
