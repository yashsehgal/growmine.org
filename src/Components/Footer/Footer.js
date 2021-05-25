
import "../../Styles/main.css"

const Footer = () => {
  return (
    <div className="Footer">
     <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 	<div className="logo">
  	 			<a href ="" >Growmine<text>.org</text></a>
				   </div>
  	 		</div>
  	 		
  	 		<div class="footer-col">
  	 			<h4>home</h4>
  	 			<ul>
  	 				<li><a href="#">Explore</a></li>
  	 				<li><a href="#">Contribute</a></li>
  	 				<li><a href="#">login</a></li>
  	 				<li><a href="#">Create an Acoount</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-github"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-discord"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
		   <div className="copyright">
		   <a>&copy; Copyright 2021 Growmine.org</a>
		   </div>
  	 </div>
    </div>
  )
};

export default Footer