import React, { Component } from 'react';
// subcomponents...
import Carousel from '../subcomponents/Carousel/index';
import MediaObject1 from '../subcomponents/MediaObject1/index';
import CardDeck2 from '../subcomponents/CardDeck2/index';
import MediaObject2 from '../subcomponents/MediaObject2/index';

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

					<CardDeck2 />

					<MediaObject2 />

					<MediaObject1 />
				</main>
			</div>
		);
	}
}

export default Main;
