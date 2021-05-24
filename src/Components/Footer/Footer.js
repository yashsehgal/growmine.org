
import "../../Styles/main.css"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <span className="logo">
        <a href="/">
            Growmine<text>.org</text>
          </a>
        </span>
        <div className="content">
          <ul className ="footer options">
            <li><a href ="/explore" >Explore</a></li>
            <li><a href ="/contribute" >Contribute</a></li>
            <li><a href ="/login" >Login</a></li>
            <li><a href ="/create-account" >Create an Account</a></li>
          </ul>
        </div>
        <div className="footer-links">
          {/* Social media Icons to be added */}
        <i class="fab fa-github"></i> 
        </div>
      </div>
    </div>
  )
};

export default Footer