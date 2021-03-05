# VMLY&R Full-Stack coding challenge 1
## Task

  

We have placed a number of helpful todos inside the code (see `index.js` and `App.jsx`) to help get you started, the main items we are looking for are:

  - Create a node application using express framework to provide following end points (Data source `flights.json`):
	  - `/itineraries` - These are the containers for your trips, tying together **Legs**, and **prices**. Prices are offered by an **agent** - an airline or travel agent.
	  - `/legs` - These are journeys (outbound, return) with **duration**, **stops** and **airlines**.
 - It should support following functions:
	  - fetchAll (Get all items)
	  - fetch (Get one item with given ID)
- Times should be displayed in 24 hour format.

  

## Design

  

We've provided a [design](./designs/results-small.png) for small-screens (480px). Don't worry about tackling larger breakpoints.

For the airline logos, insert the airline id to the following url: `https://logos.skyscnr.com/images/airlines/favicon/{id}.png`

  

## Client implementation

  

We'd like you to use [React](https://facebook.github.io/react/). On top of that, use whatever front-end libraries you feel comfortable with.

  

We've set you up with a build based on [SkyScanner's custom fork](https://backpack.github.io/using/backpack-react-scripts) of Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

  

We've wired in [Sass](http://sass-lang.com/) with our base stylesheet (`bpk-stylesheets`) + mixins (`bpk-mixins`) for you to get at -- see the [`Header`](./client/src/components/Header/Header.jsx) component for example use.
  

## Running the project

To startup the frontend client run the following command.

*  `npm start` - This will start the application for development