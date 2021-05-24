
import { HashRouter, Link } from "react-router-dom";

// importing videos and images as components
import IntroductionIllustrationImage from "../../Assets/intro_illustration_image.svg"
import MentorVideo from "../../Assets/mentor_video.mp4"
import GlobalCommunityImage from "../../Assets/global_community_image.svg"

const LandingPage = () => {
  return (
    <div className="LandingPage appContainer">
      <HashRouter basename="/">
      <div className="introduction-section">
        <div className="introduction-section-01">
        <h1>
            Let’s help minor
            communities grow,
            You can contribute
            as well.
        </h1>
        <div className="button_layer-vertical">
          
          <button className="solidButton"
            id="login-button">
              Login to your Account
            </button>
          
          <button className="primaryButton"
            id="create-account-community-button">
              <Link to="/create-account/community">
                Create a Community Account
              </Link>
            </button>

          <button className="secondaryButton"
            id="create-account-mentor-button">
              Create a Mentor Account
            </button>
        </div>
        </div>
        <div className="introduction-section-02">
          <img src={IntroductionIllustrationImage} 
              alt="intro-illustration-image" />
        </div>
      </div>

      {/* Why Growmine Section  */}
      <div className="why-growmine-section">
        <div className="why-growmine-section-01">
          <h2>
            Why become a <text>Mentor</text> at Growmine
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, asperiores. Unde veritatis quam cupiditate explicabo vero minima odit eligendi blanditiis molestias ullam vitae nulla, modi sunt culpa reprehenderit laudantium nisi reiciendis, alias excepturi, vel asperiores ut iste placeat? Ipsam tenetur, mollitia fuga delectus voluptas voluptatem quibusdam vel at voluptates unde impedit dolore, laborum in dignissimos dolorum atque? Cupiditate, quas quo.
          </p>
          <div className="button_layer-horizontal">
            <button className="primaryButton"
              id="create-account-button">
                Create a Growmine Account
              </button>
            
            <button className="secondaryButton"
              id="explore-mentors">
                Explore Mentors <i className="fas fa-search"></i>
              </button>
          </div>
        </div>
        <div className="why-growmine-section-02">
          <video src={MentorVideo}
            controls="controls" 
            autoplay="true"
            id="mentor-video"
            />
        </div>

      </div>
      
      {/* Global Mentorship and Community Section */}
      <div className="global-community-section">
        <div className="global-community-section-02">
          <img src={GlobalCommunityImage}
            id="global-community-image"
            alt="global-community-image" />
        </div>
        <div className="global-community-section-01">
          <h2>
            Build and <text>Teach</text> a Global Community
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius sunt, tenetur illum enim veritatis voluptate veniam laboriosam vitae sed velit hic assumenda commodi! Error in veritatis architecto praesentium iste labore quis sunt maiores quos eum! Doloremque a porro aut unde quis explicabo quibusdam nobis nostrum fugit beatae? Doloremque magni eum eius debitis non sequi ratione! Suscipit blanditiis magni quam.
          </p>
          <div className="button_layer-horizontal">
            <button className="primaryButton"
              id="create-account-button">
                Join Today! Create a new Account
              </button>

            <button className="secondaryButton"
              id="explore-mentors">
                Explore Mentors, Local Communities and Topics
              </button>
          </div>
        </div>
      </div>
    </HashRouter>
    </div>
  )
}

export default LandingPage;