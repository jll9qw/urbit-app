import React, { Component } from 'react';
import Carousel from '../subponents/Carousel/index';
import MediaObject1 from '../subponents/MediaObject1/index';
import CardDeck from '../subponents/CardDeck/index';
import MediaObject2 from '../subponents/MediaObject2/index';
import './style.css';

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
			</div>
		);
	}
}

export default Main;
