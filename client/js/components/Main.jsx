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
		this.props.getBrokersAction();
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ brokers: nextProps.brokers });
	}
	componentDidUpdate(prevProps) {
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
