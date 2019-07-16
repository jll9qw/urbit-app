import React, { Component } from 'react';
// Subponents...
import Carousel from '../Subponents/Carousel/index';
import MediaObject1 from '../Subponents/MediaObject1/index';
import CardDeck from '../Subponents/CardDeck/index';
import MediaObject2 from '../Subponents/MediaObject2/index';

import './style.css';
import './functionality';

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
