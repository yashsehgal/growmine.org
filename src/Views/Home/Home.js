
import "../../Styles/main.css"
import mentorSessionData from "../../Data/mentorSessionData";
import { useState } from "react";
import MentorSessionCard from "../../Components/MentorSessionCard/MentorSessionCard"

const Home = () => {

  const [mentorData] = useState(mentorSessionData.MentorSessionData)
  return (
    <div className="Home appContainer">
      <div className="MentorSession-Container">
        <h2>
          Trending Mentor Sessions, Workshops and BootCamps
        </h2>
        <div className="MentorSession-CardContainer">
          <div>
            {mentorData.map((data, index) => (
              <MentorSessionCard MentorData={data} />
            ))}
          </div>
        </div>

      </div>
      <div className="Community-Container">
        <h2>
          Active Communities, Organizations all around the world  
        </h2>
        <div className="Community-CardContainer">
          <div>

          </div>
        </div>
      </div>
      <div className="MentorProfile-Container">
        <h2>
          Some trending mentors, subject matter experts on Growmine
        </h2>
        <div className="MentorProfile-CardContainer">
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;