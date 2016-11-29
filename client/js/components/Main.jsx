import React from 'react';
import Header from './Header';
import connector from './App';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			brokers: []
		}
	}
	componentWillMount() {
		//this.props.getBrokersAction();
	}
	componentWillReceiveProps(nextProps) {
		//this.setState({ brokers: nextProps.brokers });
	}
	render() {
		return (
			<div>
				<Header />
				
				<main>
					<div>{React.cloneElement(this.props.children, this.props)}</div>
					
					{this.state.brokers.length > 0 ? <div>{React.cloneElement(this.props.children, this.props)}</div> : null }
				</main>
			</div>
		)
	}
}

module.exports = connector(Main);
