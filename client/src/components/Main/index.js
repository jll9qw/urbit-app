import React, { Component } from 'react';
// Subponents...
import Carousel from '../subcomponent/Carousel/index';
import MediaObject1 from '../subcomponent/MediaObject1/index';
import CardDeck from '../subcomponent/CardDeck/index';
import MediaObject2 from '../subcomponent/MediaObject2/index';

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
