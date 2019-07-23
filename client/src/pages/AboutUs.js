import React, { Component, Fragment } from "react";
import Main from "../components/Main/index";

import MauricePic from "../assets/images/mwebbProfilePic.jpg";
import JasonPic from "../assets/images/jlloydProfilePic.png";

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
            <div className="col-md-10 p-5- border" style={{ minHeight: 200 }} />
            <div className="col-md-10 my-3 px-0">
              <p>
                URBIT (pronounced herb·it) is a botanical index and resource for
                holistic health. This online community provides a platform for
                noobs and health nuts to get the latest trends on herbal
                therapies or obtain recommendations on our indexed herbs. Only
                our subscribers are able to post and comment our indexed
                resources. A subscriber is able to build a profile and search
                holistic medicine solutions through the application’s
                customized-API.
              </p>

              <p>
                The mission of URBIT is to create a wellness community. A place
                where subscribers can feel comfortable about sharing holistic
                practices; even quirky home remedies. As an interactive
                platform, URBIT is an informative resource for natural products,
                holistic providers, and well-being tips. Subscribers, holistic
                providers, and natural product sellers can post/comment in an
                informal environment.
              </p>

              <p>
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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
                molestias eum voluptatibus eaque excepturi blanditiis, itaque
                voluptatem culpa, libero cum accusamus. Magni officiis
                doloremque laudantium excepturi sint temporibus illo dolorem
                inventore. Nobis fuga saepe illum maiores earum, nihil ipsum
                commodi ratione reprehenderit enim eos corporis eum, dolores
                perferendis hic animi quam, laboriosam minus atque vitae iure
                alias? Tempora dolorum sunt exercitationem rerum ducimus, nam
                provident rem? Recusandae dolorum, iste cupiditate cum, harum
                optio ducimus aliquam natus modi doloribus odit eaque, officiis
                sapiente vel nemo odio eius ut beatae quos veniam. Pariatur quam
                enim culpa at eos officiis suscipit doloribus accusantium!
              </p>
            </div>
          </div>
        </Main>
      </Fragment>
    );
  }
}

export default AboutUs;
