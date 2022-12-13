import React from 'react'
import './Activity.css'
import First1 from './Images/Bitmap.jpg'
function Activity() {
  return (
    <>
    <div className="mainactivity">
        <h1>Activity</h1>
    <div className="activitycontent">
        
        <div className="activityposter first1"><img src={First1} alt="" />
        <h3>Activity Title</h3>
        <button>View More</button>
        </div>
        <div className="activityposter second"><img src={First1} alt="" />
        <h3>Activity Title</h3>
        <button>View More</button>
        </div>
        <div className="activityposter third"><img src={First1} alt="" />
        <h3>Activity Title</h3>
        <button>View More</button>
        </div>
        <div className="activityposter four"><img src={First1} alt="" />
        <h3>Activity Title</h3>
        <button>View More</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Activity