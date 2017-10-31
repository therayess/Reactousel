import React from 'react';

class Reactousel extends React.Component {
	constructor(props) {
		super(props);

		// default settins and initial state
		this.state = {
			slides: props.data || [],
			itemsPerSlide: props.itemsPerSlide || 4,
			currentSlide: 0,
			controls: typeof(props.controls) === 'undefined' ? true : props.controls,
			indicators: typeof(props.indicators) === 'undefined' ? true : props.indicators,
			autoPlay: typeof(props.autoPlay) === 'undefined' ? true : props.autoPlay,
			pauseOnHover: typeof(props.pauseOnHover) === 'undefined' ? true : props.pauseOnHover,
			useKeyboard: typeof(props.useKeyboard) === 'undefined' ? true : props.useKeyboard,
			slideInterval: null,
			autoPlayTimer: props.interval || 5000
		}

		// functions context bindings
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
		this.goToSlide = this.goToSlide.bind(this);
		this.pauseSlideshow = this.pauseSlideshow.bind(this);
		this.playSlideshow = this.playSlideshow.bind(this);
		this.useKeyboard = this.useKeyboard.bind(this);
		this.setClassName = this.setClassName.bind(this);
		this.renderSlideContent = this.renderSlideContent.bind(this);
	}
	componentDidMount() {
		// Check if the initial carousel functions are enabled and run them

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
		// Whatever the current slide is + 1
		if (this.state.currentSlide < this.state.slides.length - 1) {
			this.goToSlide(this.state.currentSlide + 1, e);
		}
		else {
			this.pauseSlideshow();
		}
	}
	previousSlide(e) {
		// Whatever the current slide is - 1
		if (this.state.currentSlide > 0) {
			this.goToSlide(this.state.currentSlide - 1, e);
		}
		else {
			this.pauseSlideshow();
		}
	}
	goToSlide(index, e) {
		// I reset the interval on each slide change.
		// The check for click event is needed because this function
		// is used in for both autoplay slide event and next/previous/indicators click
		// events, so on autoplay slide event resetInterval should not happen, and it should work
		// only in the case of a button click, hence, the check below.
		if (e && e.type == 'click') {
			this.resetInterval();
		}

		// By setting the state of the currentSlide to the targeted one, the template is re-rendered and new slide activated
		this.setState({ currentSlide: index });
	}
	playSlideshow() {
		// I set an interval object inside the slideInterval state var, this enables the slide show and controlling it
		this.setState({ slideInterval: setInterval(this.nextSlide, this.state.autoPlayTimer), autoPlay: true });
	}
	pauseSlideshow() {
		// Pause the slide show by clearing the interval and reset the state vars accordingly
		clearInterval(this.state.slideInterval);

		if (this.state.slideInterval !== null) {
			this.setState({ slideInterval: null, autoPlay: false });
		}
	}
	resetInterval() {
		// Basically, clearing and setting a new interval
		if (this.state.autoPlay) {
			this.pauseSlideshow();
			this.playSlideshow();
		}
	}
	pauseOnHover() {
		let slides = document.querySelectorAll('.reactousel .slide'),
			self = this;

		// Pause on hover is basically adding event listeners that will pause on mouse over and play on mouse out
		for (let slide of slides) {
			slide.onmouseenter = function(e) { self.pauseSlideshow(); }
			slide.onmouseleave = function(e) { self.playSlideshow(); }
		}
	}
	useKeyboard() {
		let self = this;

		// Another event listener for key down events, we need left and right arrow keys
		document.onkeydown = function(e) {
		    let charCode = e.keyCode;

		    if (charCode == 37) {
		        self.previousSlide(e);
		    }

		    if (charCode == 39) {
		    	self.nextSlide(e);
		    }
		};
	}
	setClassName(index) {
		// This is how i do the sliding right and left with css3 animations, basically, all slides
		// to the right of the current one are given a left direction slide class, and the opposite for
		// the slides on the left of the curret one, the curret one is given the showing class, the class
		// state is updated according to this logic and by switching those classes and the css3 relevant 
		// transition animations, the slide effect is achieved.
		
		let classString = 'slide';

		if (this.state.currentSlide == index) { classString += ' showing'; }
		if (this.state.currentSlide < index) { classString += ' left'; }
		if (this.state.currentSlide > index) { classString += ' right'; }

		return classString;
	}
	renderSlideContent(slide) {
		let images = slide.images.slice(),
			output = [];

		// If we have images more than the itemsPerSlide number, then
		// i'm displaying a unique image per block, else, i pick from the
		// current pool of images so duplicate images would show to fill
		// in the needed number of items per slide
		if (images.length > this.state.itemsPerSlide) {
			for (let i = 0; i < this.state.itemsPerSlide; i++) {
				let randImg = images[Math.floor(Math.random() * images.length)];
				
				images.splice(images.indexOf(randImg), 1);

				output.push(randImg);
			}
		}
		else {
			for (let k = 0; k < this.state.itemsPerSlide; k++) {
				let randImg = images[Math.floor(Math.random() * images.length)];
			
				output.push(randImg);
			}
		}

		return (
			<div>
				{output.map((image, index) => ( 
					<div key={index}  className="single-slide">
						<img src={image} />
					</div>
				))}
			</div>
		)
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
										<h1 className="heading">{slide.title}</h1>
										{this.renderSlideContent(slide)}
									</div>
								))}
							</div>

							{this.state.indicators ? 
								<div className="indicators">
									{this.state.slides.map((slide, index) => (
										<a key={index} className={this.state.currentSlide == index ? 'active' : null} 
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
								{this.state.currentSlide > 0 ? 
									<a className="controls" onClick={this.previousSlide}>
										<i className="fa fa-backward" aria-hidden="true"></i>
									</a>
								: ''}
								{this.state.autoPlay ? 
									<a className="controls" onClick={this.pauseSlideshow}>
										<i className="fa fa-pause" aria-hidden="true"></i>
									</a>
								: 
									<a className="controls" onClick={this.playSlideshow}>
										<i className="fa fa-play" aria-hidden="true"></i>
									</a>
								}
								{this.state.currentSlide < this.state.slides.length - 1 ? 
									<a className="controls" onClick={this.nextSlide}>
										<i className="fa fa-forward" aria-hidden="true"></i>
									</a>
								: ''}
							</div>
						: null }
					</div>
				: null }
			</section>
		)
	}
}

module.exports = Reactousel;
