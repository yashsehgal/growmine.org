
import "../../Styles/main.css";
import { useState } from "react";
import TagLayer from "../TagLayer/TagLayer";

const MentorSessionCard = ({MentorData}) => {

  return (
    <div className="MentorSessionCard">
      <img src={MentorData["sessionBanner"]} 
        alt="session-banner"
        className="Card-Banner" />
        
        <div className="CardBody">
          <h2 className="SessionTitle">
            {MentorData["sessionTitle"]}
          </h2>
          <span className="username-details">
            <h3 className="MentorName">
              By, {MentorData["mentorFirstName"]} {MentorData["mentorLastName"]}
            </h3>
            <p className="mentorUsername">
              @{MentorData["mentorUsername"]}
            </p>
          </span>
          <p className="sessionDuration">
            Duration: {MentorData["sessionStartDate"]} - {MentorData["sessionEndDate"]}
          </p>
        </div>
    </div>
  )
}

export default MentorSessionCard;