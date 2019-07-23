import React, { Component, Fragment } from 'react';
import Main from '../components/Main/index';
import ResultDisplay from '../components/subcomponents/ResultDisplay/index';

class Result extends Component {
	state = {
		page: 'result',
		result: this.props.result,
		// userData: this.props.userData
	};

	componentWillMount() {
		this.props.getPage(this.state.page);
	}

	// componentWillReceiveProps(nextProps){
	// 	if (nextProps.userData !== this.state.userData) {
	// 		this.setState({userData: nextProps.userData});
	// 	}
	// }

	render() {
		return (
			<Fragment>
				<Main>
					<ResultDisplay
						result={this.state.result}
						userData={this.props.userData}
						checkLogIn={this.props.checkLogIn}
					/>
					{/* {console.log('Result component result prop: ', this.props.result)} */}
					{console.log('Logged in ?', this.props.checkLogIn())}
					{console.log(this.state.result)}
					{console.log('Result page loaded...')}
				</Main>
			</Fragment>
		);
	}
}

export default Result;
