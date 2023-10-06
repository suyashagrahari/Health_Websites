import React, { useState } from "react";
import "./members_second_page.css";
import discussion from "./colleagues_discussing_team_project.png"
import green from "/Users/suyashagrahari/Desktop/health/Health_umbrella/src/Components/Members/members_second_page/greeninfographics.png";
import {NavLink} from 'react-router-dom';

function MembersSecondPage(props){
    const[showMore,setShowMore]=useState(false);
    return (
    //     <div className="suyash">
    // <div className="test">
    //     <div className="test-1">
    //         <h1 className="heading">Meet Our Team</h1>
    //         <p className="text">{props.data.text}</p>
    //         {showMore?props.data.text: `${props.data.text.substring(0,175)}`}
    //         <button className="btn" onClick={()=>setShowMore(!showMore)}>
    //             {showMore ? "show less":"show more"}
    //         </button>
            
    //     </div>
    //     <img src={discussion} alt = "discussion image"/>
    // </div>
    // </div>
    <>
    <div className="center">
    
        <div className="suyash">
     
        <div className="suyashcenter">
            <div className="left">
                <div className="leftitem">
                <h3>Meet our Team</h3>
                </div>
                <div className="leftitem">
                <p>Our diverse team o passionate individuals is committed towards providing exceptional user experience which drives innovation and success. Meet our dedicated team members here!</p>
                </div>
                <div className="leftitem">
                <NavLink to="/teamleaders" >Our Team</NavLink>
                    
                </div>
            </div>
            <div className="right">
            <img src={discussion} alt = "discussion image"/>
            </div>
            </div>
        
        </div>
        </div>
    </>
    )
}
export default MembersSecondPage;





