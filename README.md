Setup
---

1. Install dependencies: npm install
2. Run server: npm run start
4. Check the app on http://localhost:3000

- Compile code: npm run compile
- Run compile watch: npm run watch



Reactousel
---
Simple carousel to display main data fetched from propertyfinder's api. App is built using react, redux, express.js and node.js.
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

Names are self explanatory
