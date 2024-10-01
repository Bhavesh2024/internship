import React, { useState } from 'react'

const Home = () => {
  const [count,setCount] = useState(0);
  
  const handleCount = (sign) =>{
     sign == '+' ? setCount(c => c + 1) : setCount(c => c - 1);

     if(count > 100){
       throw new Error('Max Count Reached');
     }
  }
  return (
    <div>
       <button onClick={() => handleCount('+')}>Increment</button>
       <button onClick={() => handleCount('-')}>Decrement</button>
    </div>
  )
}

export default Home
