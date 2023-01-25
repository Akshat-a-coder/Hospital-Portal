import React from 'react'
import "./blog.css";
import { FaAngleRight} from "react-icons/fa";

const App = () => {
  return (
    <div className="blog--App">
     <div className="blog--text">
        <h1>Health Blogs</h1>
        <p1 className="blog--info">
          Get updated with Health & Wellness tips, news on latest treatments and
          information for healthy living from our experts.
        </p1>  
        <br></br><br></br>  
        <button className='blog--btn'>
            <span className='blog--btn_'>Blogs</span>
            <span className='blog--btn_icon'>
                <FaAngleRight fontSize={18} onClick={() => {}}/>
            </span>
        </button>
    </div>
      <div className="blog--image">
        <img src = "https://hips.hearstapps.com/hmg-prod/images/766/health-blogs-1515526561.jpg" alt="blog" width= "250px" height="200px"></img>
      </div>
    </div>
  )
}

export default App
