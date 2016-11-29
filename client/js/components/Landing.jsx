import React from 'react';
import connector from './App';
import data from '../data';
import Reactousel from './Reactousel';

class Landing extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: ['slide1', 'slide2', 'slide3', 'slide4']
		}
	}
	render() {
		return (
			<section>
				<Reactousel data={this.state.data} 
							autoPlay={true} 
							pauseOnHover={true} 
							useKeyboard={true} 
							controls={true}
							indicators={true}
							interval={4000} />
			</section>
		)
	}
}

module.exports = connector(Landing);
