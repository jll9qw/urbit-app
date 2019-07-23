import React, { Component } from 'react';
import ResultCard from '../ResultCard/index';

class SearchResults extends Component {
	state = {
		results: []
	};
	render() {
		return (
			<div>
				<div className='container shadow round_corner p-4 border bg-light'>
					<h3 className='text-center text-md-left text-light-'>
						Search results:
					</h3>
					<hr className='w-25 bg-success rounded py-1 ui_gradient2 border-0 mt-n1 ml-md-0' />
					<div className='row'>
						<div className='container card-columns'>
							{this.props.results.map(herb => {
								return (
									<ResultCard result={herb} getResult={this.props.getResult} />
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchResults;
