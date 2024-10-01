import React, { useContext } from 'react'
import "../styles/styles.css"
import { DarkModeContext } from '../context/DarkModeContext'
const Card = () => {
  const {isDark,toggleMode} = useContext(DarkModeContext)
  return (
    <>
      <div className={isDark ? 'card bg-dark' : 'card'}>
        <div className="card-header">
              <div className="user">
                  <img src="../images/user.jpg" alt="" className='user-image' />
                  <h4 className={isDark ? 'white' : ''}>Brian Tracy</h4>
              </div>
              <i className={`fa-solid ${isDark ? 'fa-moon white' : 'fa-sun'}`} onClick={() => toggleMode(!isDark)}></i>
        </div>
        <div className="card-body">
            <div className="card-media">
                 <div className="post">
                 <img src="../images/post.png" alt="" className='post-image' />
                 </div>
                 <div className={isDark ? 'interaction white' : 'interaction'}>
                   <i className="fa-solid fa-heart"></i>
                   <i className="fa-solid fa-share"></i>
                   <i className="fa-solid fa-comment"></i>
                 </div>
            </div>
            <div className={isDark ? 'card-content white' : 'card-content'}>
                 <h3>My First Post</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque cumque quibusdam neque, fugiat, velit iusto aliquam ut consectetur dolores veniam nesciunt suscipit illum quod laborum eveniet quisquam exercitationem autem.</p>
            </div>
        </div>
        <div className="card-footer">
              <a href="#" className='learn-more'>Learn More&nbsp;<span className='arrow'>&#8594;</span></a>
        </div>
      </div>
    
    </>
  )
}

export default Card
