import React, { Component } from 'react';
// Subponents...
import Carousel from '../subponents/Carousel/index';
import MediaObject1 from '../subponents/MediaObject1/index';
import CardDeck from '../subponents/CardDeck/index';
import MediaObject2 from '../subponents/MediaObject2/index';

import './style.css';
import './functionality';

<<<<<<< HEAD
	<div className="container rounded">
		<div className="row d-flex">
			<div className="col-md-6 rounded">
				<div className="container herbal_bowl_image2"></div>
			</div>
			<div className="col-md-6 py-3 d-flex justify-content-center align-items-center rounded">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center text-md-left">
							<h3>A hub for alternative health solutions and metaphysical healing</h3>
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
					<img src="http://static1.squarespace.com/static/58fd210246c3c4c4320684ae/58fee05b29687f9157642b14/595a88c4440243407b761085/1499106620063/irish-moss-benefits-fresh-seaweed.jpg?format=1500w" className="card-img-top" alt="sea moss health drink"/>
					<div className="card-body">
						<h5 className="card-title">Add this to your diet</h5>
						<p className="card-text">
Sea moss drink recipe – optimise your health by learning to make this refreshingly sweet spiced infused Jamaican Irish moss drink.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>

				<div className="card border-0 card_fx round_corner overflow-hidden">
					<img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/turmeric_slideshow/1800ss_thinkstock_rf_fresh_and_dried_turmeric_roots.jpg?resize=650px:*" className="card-img-top" alt="tumeric"/>
					<div className="card-body">
						<h5 className="card-title">Home remedies for lower Cholesterol 
</h5>
						<p className="card-text">There are mainly two types of cholesterol-Low-Density Lipoproteins (LDL) which is the bad cholesterol that increases your risk of heart disease and the High-Density Lipoproteins (HDL) which is the good cholesterol that reduces your risk of heart diseases.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>

				<div className="card border-0 card_fx round_corner overflow-hidden">
					<img src="https://source.unsplash.com/random/300x200?herbal" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Meditation is the best high ever</h5>
						<p className="card-text">When you allow yourself to sit quietly and just "be," you can experience a feeling that goes beyond a state of mind you're used to. It can feel boundless or limitless, and can best be described as transcendent.</p>
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
							<h2>Fun Fact</h2>
						</div>
						<div className="col-12">
							<div className="container pl-0">
								<hr className="w-100 bg-success rounded py-1 ui_gradient2 border-0 mt-n1"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h6>Garlic was used as an antiseptic against gangrene in the First World War.</h6>
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
							<h2>In the News</h2>
						</div>
						<div className="col-12">
							<div className="container pl-0">
								<hr className="w-100 bg-success rounded py-1 ui_gradient2 border-0 mt-n1"/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p><a href="https://www.forbes.com/sites/johnlamattina/2018/06/20/there-go-those-drug-companies-inventing-new-diseases-again/#5f0114df34bb">"So, if current events weren’t enough to scare you, now you have to be on the lookout for “malady mongers” – drug companies that sell pills by inventing disease. We have Michael Walsh to thank for bringing this to the public’s attention." - Forbes</a></p>
						</div>
					</div>
				</div>
=======
class Main extends Component {
	state = {};
	render() {
		return (
			<div>
				<main className=' d-flex flex-column bg-light flex-grow-1 py-3 main_image'>

					<Carousel />

					<MediaObject1 />

					<CardDeck />

					<MediaObject2 />

					<MediaObject1 />
					
				</main>
>>>>>>> 311b2bbef2a44942f2cc9d1b5ed61bd66962304a
			</div>
		);
	}
}

export default Main;
