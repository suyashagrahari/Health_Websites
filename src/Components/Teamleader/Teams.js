import React from 'react'
import "./index.css"
import Man from "./image/Leader.png"
import linkedIn from "./image/LinkedIn.png"
import gmail from "./image/gmail logo.png"
import Phone from "./image/Ringer Volume.png"
const Teams = () => {
  return (
    <>
       
        <div className="teams">
        
            <div className="center">
                <div className="left">
                    <div className="Leader">
                    Dr. Amit Neogi
                    </div>
                    <div className="tittle">
                    Founder of Health Umbrella
                    </div>
                    <div className="para">
                    Lorem ipsum dolor sit amet. Et nesciunt nulla et eligendi distinctio est doloremque eaque. Vel ratione excepturi sed pariatur quia aut dolor quis et perferendis doloribus aut ipsum consequatur sed nobis accusamus aut doloremque quibusdam.
                    </div>
                    <div className="icon">
                        <div className="linkedin">
                            <img src={linkedIn} alt="" />
                        </div>
                        <div className="Gmail">
                            <img src={gmail} alt="" />
                        </div>
                        <div className="hone">
                            <img src={Phone} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={Man} alt="" />
                </div>
            </div>
        </div>
        
    </>
    
  )
}

export default Teams