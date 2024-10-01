import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        const response = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => console.log(response.json()))
      } catch (error) {
        // This will trigger the ErrorBoundary
        throw error; // Re-throw the error to be caught by ErrorBoundary
      }
    };

    fetchData();
  }, []);

  return (
    <>
      Home
      <div style={{ display: "flex", flexWrap: 'wrap', gap: '10px' }}>
        {data === null ? (
          <div>Loading...</div>
        ) : (
          <div style={{ border: "1px solid gainsboro", padding: "10px", margin: "10px", width: "250px" }}>
            <div className="id">id: {data.id}</div>
            <div className="title">title: {data.title}</div>
            <div className='body'>body: {data.body}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
