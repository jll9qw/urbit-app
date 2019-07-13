import React, { Component } from "react";
import "./style.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <main className=" d-flex flex-column bg-light flex-grow-1 py-3 main_image">
	<div className="container p-3">
		<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner round_corner shadow-sm" style={{height: 300}}>
				<div className="carousel-item active position-relative">
					<div className="position-absolute d-flex flex-column justify-content-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3">
						<h3 className="mt-n4 d-none d-md-block ">Slide 1</h3>
						<hr className="d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1"/>
						<p className="lead px-5 text-break">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi porro<span className="d-none d-md-inline"> error quas repudiandae vero doloribus voluptatibus autem tempora quod? Cum voluptate quasi velit quae nostrum perspiciatis optio!</span>
							<span
							 className="d-md-none">...</span>
						</p>
						<a href="#" className="d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white">Learn more</a>
					</div>
					<img src="https://source.unsplash.com/random/?meditation" className="d-block w-100 center_img" alt="..."/>
				</div>
				<div className="carousel-item position-relative">
					<div className="position-absolute d-flex flex-column justify-content-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3">
						<h3 className="d-none d-md-block">Slide 2</h3>
						<hr className="d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1"/>
						<p className="lead px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed <span className="d-none d-md-inline">quos fugiat, quis minus quibusdam?</span><span className="d-md-none">...</span></p>
						<a href="#" className="d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white">Learn more</a>
					</div>
					<img src="https://source.unsplash.com/random/?yoga" className="d-block w-100 center_img" alt="..."/>
				</div>
				<div className="carousel-item position-relative">
					<div className="position-absolute d-flex flex-column justify-content-center justify-content-md-around align-items-center w-100 text-center text-white p-5 mt-4 mt-md-3">
						<h3 className="mt-n4 d-none d-md-block">Slide 3</h3>
						<hr className="d-none d-md-block w-25 rounded border-0 ui_gradient1 mt-n1 py-1"/>
						<p className="lead px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore <span className="d-none d-md-inline">error sit illum cupiditate. Officiis modi excepturi voluptatem! Repudiandae blanditiis commodi iste consequatur necessitatibus ad facilis delectus!</span>
							<span
							 className="d-md-none">...</span>
						</p>
						<a href="#" className="d-none d-md-block btn rounded-btn ui_btn2 border-0 text-white">Learn more</a>
					</div>
					<img src="https://source.unsplash.com/random/?wellness" className="d-block w-100 center_img" alt="..."/>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
		</div>
	</div>

	<div className="container rounded">
		<div className="row d-flex">
			<div className="col-md-6 rounded">
				<div className="container herbal_bowl_image2"></div>
			</div>
			<div className="col-md-6 py-3 d-flex justify-content-center align-items-center rounded">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center text-md-left">
							<h2>Holistic Health.</h2>
						</div>
						<div className="col-12">
							<div className="container pl-0">
								<hr className="w-100 bg-success rounded py-1 ui_gradient2 border-0 mt-n1"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, quidem voluptatibus rerum laudantium reprehenderit totam enim voluptas quae dolore quasi vero, facere perspiciatis, doloremque velit.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="container shadow-sm- rounded p-3">
		<h3 className="text-center">The healthy way.</h3>
		<hr className="w-25 bg-success rounded py-1 ui_gradient2 border-0 mt-n1"/>
		<div className="row">
			<div className="container card-deck">
				<div className="card border-0 card_fx round_corner overflow-hidden">
					<img src="https://source.unsplash.com/random/300x200?herb" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>

				<div className="card border-0 card_fx round_corner overflow-hidden">
					<img src="https://source.unsplash.com/random/300x200?herbs" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>

				<div className="card border-0 card_fx round_corner overflow-hidden">
					<img src="https://source.unsplash.com/random/300x200?herbal" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="container rounded">
		<div className="row d-flex">
			<div className="col-md-6 py-3 d-flex justify-content-center align-items-center rounded">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center text-md-left">
							<h2>Holistic Health.</h2>
						</div>
						<div className="col-12">
							<div className="container pl-0">
								<hr className="w-100 bg-success rounded py-1 ui_gradient2 border-0 mt-n1"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, quidem voluptatibus rerum laudantium reprehenderit totam enim voluptas quae dolore quasi vero, facere perspiciatis, doloremque velit.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 herbal_bowl_image rounded"></div>
		</div>
	</div>

	<div className="container rounded">
		<div className="row d-flex">
			<div className="col-md-6 holistic_image rounded"></div>
			<div className="col-md-6 py-3 d-flex justify-content-center align-items-center rounded">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center text-md-left">
							<h2>Holistic Health.</h2>
						</div>
						<div className="col-12">
							<div className="container pl-0">
								<hr className="w-100 bg-success rounded py-1 ui_gradient2 border-0 mt-n1"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, quidem voluptatibus rerum laudantium reprehenderit totam enim voluptas quae dolore quasi vero, facere perspiciatis, doloremque velit.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</main>
      </div>
    );
  }
}

export default Main;
