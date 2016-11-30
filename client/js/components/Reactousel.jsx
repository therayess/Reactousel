import React from 'react';
import RenderSlide from './RenderSlide';

class Reactousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			slides: props.data || [],
			currentSlide: 0,
			controls: typeof(props.controls) === 'undefined' ? true : props.controls,
			indicators: typeof(props.indicators) === 'undefined' ? true : props.indicators,
			autoPlay: typeof(props.autoPlay) === 'undefined' ? true : props.autoPlay,
			pauseOnHover: typeof(props.pauseOnHover) === 'undefined' ? true : props.pauseOnHover,
			useKeyboard: typeof(props.useKeyboard) === 'undefined' ? true : props.useKeyboard,
			slideInterval: null,
			autoPlayTimer: props.interval || 5000
		}

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
		this.goToSlide = this.goToSlide.bind(this);
		this.pauseSlideshow = this.pauseSlideshow.bind(this);
		this.playSlideshow = this.playSlideshow.bind(this);
		this.useKeyboard = this.useKeyboard.bind(this);
		this.setClassName = this.setClassName.bind(this);
	}
	componentDidMount() {
		if (this.state.autoPlay) {
			this.playSlideshow();
		}

		if (this.state.pauseOnHover) {
			this.pauseOnHover();
		}

		if (this.state.useKeyboard) {
			this.useKeyboard();
		}
	}
	nextSlide(e) {
		this.goToSlide(this.state.currentSlide + 1, e);
	}
	previousSlide(e) {
		this.goToSlide(this.state.currentSlide - 1, e);
	}
	goToSlide(index, e) {
		if (e && e.type == 'click') {
			this.resetInterval();
		}

		this.setState({ currentSlide: (index + this.state.slides.length) % this.state.slides.length });
	}
	playSlideshow() {
		this.setState({ slideInterval: setInterval(this.nextSlide, this.state.autoPlayTimer), autoPlay: true });
	}
	pauseSlideshow() {
		clearInterval(this.state.slideInterval);

		this.setState({ slideInterval: null, autoPlay: false });
	}
	resetInterval() {
		this.pauseSlideshow();
		this.playSlideshow();
	}
	pauseOnHover() {
		let slides = document.querySelectorAll('.reactousel .slide'),
			self = this;

		slides.forEach(function(slide) {
			slide.onmouseover = function(e) { self.pauseSlideshow(); }
			slide.onmouseout = function(e) { self.playSlideshow(); }
		});
	}
	useKeyboard() {
		let self = this;

		document.onkeydown = function(e) {
		    let charCode = e.keyCode;

		    if (charCode == 37) {
		        self.previousSlide({ type: 'click' });
		    }

		    if (charCode == 39) {
		    	self.nextSlide({ type: 'click' });
		    }
		};
	}
	setClassName(index) {
		let classString = 'slide';

		if (this.state.currentSlide == index) { classString += ' showing'; }
		if (this.state.currentSlide < index) { classString += ' left'; }
		if (this.state.currentSlide > index) { classString += ' right'; }

		return classString;
	}
	render() {
		return (
			<section className="full">
				{this.state.slides.length > 0 ? 
					<div className="reactousel-container">
						<div className="reactousel">
							<div className="slides-wrapper">
								{this.state.slides.map((slide, index) => (
									<div key={index} className={this.setClassName(index)}>
										<RenderSlide slide={slide} />
									</div>
								))}
							</div>

							{this.state.indicators ? 
								<div className="indicators">
									{this.state.slides.map((slide, index) => (
										<a href="#" key={index} className={this.state.currentSlide == index ? 'active' : null} 
										onClick={this.goToSlide.bind(this, index)}>
											{this.state.currentSlide == index ?
												<i className="fa fa-circle" aria-hidden="true"></i>
											:
												<i className="fa fa-circle-thin" aria-hidden="true"></i>
											}
										</a>
									))}
								</div>
							: null }
						</div>

						{this.state.controls ? 
							<div className="controls-wrapper">
								<a href="#" className="controls" onClick={this.previousSlide}>
									<i className="fa fa-backward" aria-hidden="true"></i>
								</a>
								{this.state.autoPlay ? 
									<a href="#" className="controls" onClick={this.pauseSlideshow}>
										<i className="fa fa-pause" aria-hidden="true"></i>
									</a>
								: 
									<a href="#" className="controls" onClick={this.playSlideshow}>
										<i className="fa fa-play" aria-hidden="true"></i>
									</a>
								}
								<a href="#" className="controls" onClick={this.previousSlide}>
									<i className="fa fa-forward" aria-hidden="true"></i>
								</a>
							</div>
						: null }
					</div>
				: null }
			</section>
		)
	}
}

module.exports = Reactousel;
