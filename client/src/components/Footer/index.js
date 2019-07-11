import React from "react";
import {Link} from  "react-router-dom";
import "./style.css"

class Footer extends React.Component {
  render(){
    return (
       <footer className="d-flex justify-content-center py-4 py-md-2 ui_gradient2" >
	<div className="container px-0 d-flex flex-column justify-content-center py-2">
		
		<ul className="nav flex-column flex-md-row justify-content-center align-items-center px-0">
  <li className="nav-item mb-3 mb-md-0">
    <Link to ="#" className="nav-link align-self-center rounded-btn shadow-sm px-3 active"  >hrbs</Link>
  </li>
  <li className="nav-item mb-3 mb-md-0">
    <Link to = "" className="nav-link disabled text-light" href="#">&copy;2019 MaurJaso</Link>
  </li>
  <li className="nav-item mb-3 mb-md-0">
  </li>
  <li className="nav-item d-flex w-25- mb-3 mb-md-0 justify-content-center">
		<Link to = "" className="btn-light- btn-white rounded-btn my-lg-2 p-2 shadow text-pinkish" href="#"><i className="fab fa-twitter"></i></Link>
				<Link to = "" className="btn-light- btn-white rounded-btn mx-3 my-lg-2 p-2 shadow text-pinkish" href="#"><i className="fab fa-facebook"></i></Link>
				<Link to = "" className="btn-light- btn-white rounded-btn my-lg-2 p-2 shadow text-pinkish" href="#"><i className="fab fa-instagram"></i></Link>
  </li>
</ul>
		
	</div>
</footer>
    );
  }
}

  

export default Footer;