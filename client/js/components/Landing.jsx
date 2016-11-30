import React from 'react';
import connector from './App';
import Reactousel from './Reactousel';

class Landing extends React.Component {
	render() {
		return (
			<section>
				<div id="carousel-1">
					<Reactousel data={this.props.brokers} 
								autoPlay={true} 
								pauseOnHover={true} 
								useKeyboard={true} 
								controls={true}
								indicators={true}
								interval={4000} />
				</div>
			</section>
		)
	}
}

module.exports = connector(Landing);
