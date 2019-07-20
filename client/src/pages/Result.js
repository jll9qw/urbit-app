import React, { Component } from 'react';
import Main from '../components/Main/index';
import ResultDisplay from '../components/subcomponents/ResultDisplay/index';

class Result extends Component {
	state = {
		page: 'result',
		result: this.props.result
	};

	componentWillMount() {
		this.props.getPage(this.state.page);
	}

	render() {
		return (
			<div>
				<Main>
					<ResultDisplay result={this.state.result} />
					{/* {console.log('Result component result prop: ', this.props.result)} */}
					{console.log(this.state.result)}
					{console.log('Result page loaded...')}
				</Main>
			</div>
		);
	}
}

export default Result;
