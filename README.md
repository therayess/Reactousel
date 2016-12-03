Setup
---

1. Install dependencies: npm install
2. Compile code: npm run compile
3. Run server: npm run start
4. Check the app on http://localhost:8080

Other commands: 
- Run compile watch: npm run watch



Reactousel
---
Simple javascript/css3 responsive carousel to display data fetched from propertyfinder's api. App is built using react, redux, express.js and node.js.
Data fetching is handled in the backend using node.js's 'request' package, and fed to the frontend using a simple API.
Redux handles dispatching the api call on the frontend and initializing the app state with the data. 



Carousel Settings
---
I added some basic settings for the carousel, nothing fancy, here's an example:
<Reactousel data={dataArray} 
	autoPlay={true} 
	pauseOnHover={true} 
	useKeyboard={true} 
	controls={true}
	indicators={true}
	interval={4000} />

- data: an array of objects that holds what needs to be displayed
- autoPlay: enable slideshow autoplay, true by default
- pauseOnHover: if enabled, slide show pauses when mouse is over it, true by default
- useKeyboard: right and left keys to move between slides, true by default
- controls: the bar under the carousel that contains the controls (previous, pause/play and next), true by default
- indicators: the dots indicators which are used to go to slides, true by default
- interval: if autoplay enabled, this is the time between slides, 5 seconds by default



Carousel content template
---
The slide content rendering template RenderSlide.jsx can be modified according to user's needs, use it to modify the html and display what you like in each slide.
