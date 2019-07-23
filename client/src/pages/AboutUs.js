import React, { Component, Fragment } from "react";
import Main from "../components/Main/index";

import MauricePic from "../assets/images/mwebbProfilePic.jpg";
import JasonPic from "../assets/images/jlloydProfilePic.png";
import urbitLogo from "../assets/images/urbit_logo.png";

class AboutUs extends Component {
  state = {
    page: "aboutUs"
  };

  componentWillMount() {
    this.props.getPage(this.state.page);
  }

  render() {
    return (
      <Fragment>
        <Main>
          <div className="container p-5 round_corner bg-white d-flex flex-column align-items-center shadow-sm">
            <h2 className="align-self-start">About Us</h2>
            <div
              className="col-md-10 p-5- "
              style={{
                minHeight: 200,
                backgroundImage: `url('${urbitLogo}')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            />
            <div className="col-md-10 my-3 px-0">
              <p className="text-center  text-md-left">
                URBIT (pronounced herb·it) is a botanical index and resource for
                holistic health. This online community provides a platform for
                noobs and health nuts to get the latest trends on herbal
                therapies or obtain recommendations on our indexed herbs. Only
                our subscribers are able to post and comment our indexed
                resources. A subscriber is able to build a profile and search
                holistic medicine solutions through the application’s
                customized-API.
              </p>

              <p className="text-center  text-md-left">
                The mission of URBIT is to create a wellness community. A place
                where subscribers can feel comfortable about sharing holistic
                practices; even quirky home remedies. As an interactive
                platform, URBIT is an informative resource for natural products,
                holistic providers, and well-being tips. Subscribers, holistic
                providers, and natural product sellers can post/comment in an
                informal environment.
              </p>

              <p className="text-center  text-md-left">
                We recommend that our subscribers please continue to visit your
                trusted family care provider. Mainly, to uncover hereditary
                health concerns so a subscriber can make a conscious decision on
                their treatment options. Proactive detection is critical to the
                success of herbal therapy.
              </p>
            </div>
            <div className="col-md-10 px-0 d-flex flex-column align-items-center">
              <h4 className="align-self-start">Meet the DEVs</h4>
              <div className="row my-3">
                <div className="col-md-12">
                  <div className="card-deck">
                    <div
                      className="card round_corner card_fx overflow-hidden position-relative border-0"
                      style={{ maxWidth: 350 }}
                    >
                      <img
                        src={MauricePic}
                        className="card-img-top border-0"
                        alt="..."
                        style={{
                          height: 300,
                          objectFit: "cover",
                          objectPosition: "center"
                        }}
                      />
                      <div className="card-body text-center-">
                        <h5 className="card-title text-md-center text-sm-left">
                          Maurice Webb
                        </h5>
                        <h6 className="text-md-center">
                          Full Stack Web Developer
                        </h6>
                        <ul className="">
                          <li>UI/UX</li>
                          <li>Graphic/Web Design</li>
                          <li>Web Scraping</li>
                          <li>Database Architect</li>
                        </ul>
                        <div className="d-flex justify-content-md-center">
                          <a
                            href="https://www.linkedin.com/in/mauricejwebb/"
                            className="btn rounded-btn ui_btn2 border-0 text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a
                            href="https://mauricewebb.github.io/DevCard/"
                            className="btn rounded-btn ui_btn2 border-0 text-white mx-3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-briefcase" />
                          </a>
                          <a
                            href="https://github.com/MauriceWebb"
                            className="btn rounded-btn ui_btn2 border-0 text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-github" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card round_corner card_fx overflow-hidden border-0"
                      style={{ maxWidth: 350 }}
                    >
                      <img
                        src={JasonPic}
                        className="card-img-top border-0"
                        alt="..."
                        style={{
                          height: 300,
                          objectFit: "cover",
                          objectPosition: "center"
                        }}
                      />
                      <div className="card-body text-center-">
                        <h5 className="card-title text-md-center text-sm-left">
                          Jason Lloyd
                        </h5>
                        <h6 className="text-md-center">
                          Full Stack Web Developer
                        </h6>
                        <ul className="">
                          <li>Content Management</li>
                          <li>Deployment</li>
                          <li>Quality Assurance</li>
                          <li>Database Architect</li>
                        </ul>
                        <div className="d-flex justify-content-md-center">
                          <a
                            href="https://www.linkedin.com/in/jason-lloyd-a0ba9529/"
                            className="btn rounded-btn ui_btn2 border-0 text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                          <a
                            href="https://jll9qw.github.io/responsive-portfolio/"
                            className="btn rounded-btn ui_btn2 border-0 text-white mx-3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fas fa-briefcase" />
                          </a>
                          <a
                            href="https://github.com/jll9qw"
                            className="btn rounded-btn ui_btn2 border-0 text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-github" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center  text-md-left">
			  We employed our MERN stack skills while developing this application, and we look forward to developing our technical acumen. As a full stack developer, I utilized my knowledge in tasks relating to both front-end development, back-end development, debugging, and deployment. 
              </p>
            </div>
          </div>
        </Main>
      </Fragment>
    );
  }
}

export default AboutUs;
