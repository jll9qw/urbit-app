import React from 'react';

const Nav = (props) => {
	return(
		<div>
	<div className="container px-0">
		<nav className="navbar navbar-expand-lg navbar-light d-flex align-items-stretch">
			<a className="navbar-brand align-self-center rounded-btn shadow-sm px-3 active" href="#" style={{ color: "#43c6ac" }}>
                hrbs<span className="sr-only">(current)</span>
              </a>
			<button className="navbar-toggler border-0 shadow rounded-btn px-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ outline:
			 "none" }}>
                <span className="navbar-toggler-icon" />
              </button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav text-center ml-lg-auto d-flex justify-content-between align-items-center">
					<li className="nav-item mx-1">
						<a className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4" href="#">
                      herbs
                    </a>
					</li>
					<li className="nav-item mx-1">
						<a className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4" href="#">
                      forum
                    </a>
					</li>
					<li className="nav-item mx-1">
						<a className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4" href="#">
                      about us
                    </a>
					</li>
					<li className="nav-item mx-1">
						<a className="nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4" href="#">
                      blog
                    </a>
					</li>
					<li className="nav-item  mx-1">
						<a className="nav-link btn btn-light rounded-btn mb-3 my-lg-2 px-4 px-md-4 shadow" href="#">
                      log in
                    </a>
					</li>
					<li className="nav-item mx-0 ml-lg-3">
						<a className="nav-link btn ui_btn2 border-0 my-lg-2 text-white rounded-btn px-4 shadow" href="#">
                      subscribe
                    </a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</div>
	);
}

export default Nav;