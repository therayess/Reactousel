import React from 'react';

class RenderSlide extends React.Component {
	render() {
		let slide = this.props.slide;
		return (
			<div>
				<div className="img-circle logo"><img src={slide.links.logo} /></div>
				<h1 className="heading">
					<a href={`https://www.propertyfinder.ae${slide.links.self}`} target="_blank">{slide.name}</a>
					<small>
						<span><i className="fa fa-map-marker" aria-hidden="true"></i> {slide.location}</span>
						<span><i className="fa fa-phone" aria-hidden="true"></i> {slide.phone}</span>
					</small>
				</h1>
				<p className="text-truncate">{slide.description}</p>
				<div className="details">
					<span className="meta">
						<i className="fa fa-home" aria-hidden="true"></i> 
						{slide.residentialForRentCount + slide.residentialForSaleCount}
						<span className="unit-type">Residentials</span>
					</span>
					<span className="meta">
						<i className="fa fa-building" aria-hidden="true"></i> 
						{slide.commercialTotalCount}
						<span className="unit-type">Commercials</span>
					</span>
				</div>
			</div>
		)
	}
}

module.exports = RenderSlide;
