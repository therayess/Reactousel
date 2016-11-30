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
		// On site load, get the data from the API 
		this.props.getBrokersAction();
	}
	componentWillReceiveProps(nextProps) {
		// I set a state here to load main site section when data is fetched and set
		this.setState({ brokers: nextProps.brokers });
	}
	componentDidUpdate(prevProps) {
		// Simple preloader to make things neat
		if (this.props.brokers.length > 0) {
			document.getElementById('preloader').remove();
	    }
	}
	render() {
		return (
			<div>
				<div id="preloader">
					<div className="preload-wrapper">
						<div className="loader"></div>
					</div>
				</div>

				<Header />
				
				<main>
					{this.state.brokers.length > 0 ? <div>{React.cloneElement(this.props.children, this.props)}</div> : null }
				</main>
			</div>
		)
	}
}

module.exports = connector(Main);
