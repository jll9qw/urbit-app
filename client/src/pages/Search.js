import React, { Component, Fragment } from 'react';
import Main from '../components/Main/index';
import SearchResults from '../components/subcomponents/SearchResults/index';

class Search extends Component {
	state = {
		page: 'searchResults'
	};

	componentWillMount() {
		this.props.getPage(this.state.page);
	}

	render() {
		return (
			<Fragment>
				<Main>
					<SearchResults
						results={this.props.results}
						getResult={this.props.getResult}
					/>
				</Main>
			</Fragment>
		);
	}
}

export default Search;
