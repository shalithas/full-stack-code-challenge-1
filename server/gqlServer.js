var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const { getDataFromJson } = require('./serverUtils')
var json = getDataFromJson('flights.json');

const itinerariesData = json.itineraries
const legsData = json.legs

var getItinerary = function(args) { 
    var id = args.id;
    return itinerariesData.filter(itinerary => {
        return itinerary.id == id;
    })[0];
}

var getItineraries = function(args) {
    return itinerariesData
}

var getLeg = function(args) { 
    var id = args.id;
    return legsData.filter(leg => {
        return leg.id == id;
    })[0];
}

var getLegs = function(args) {
    return legsData
}

// GraphQL schema
var schema = buildSchema(`
    type Query {
        itinerary(id: String): Itinerary
        itineraries: [Itinerary]
        leg(id: String): Leg
        legs: [Leg]
    }
    
    type Itinerary {
        id: String
        legs: [String]
        price: String
        agent: String
        agent_rating: String
    }
    type Leg {
        id: String
        departure_airport: String
        arrival_airport: String
        departure_time: String
        arrival_time: String
        stops: Int
        airline_name: String
        airline_id: String
        duration_mins: Int
    }
`);
// Root resolver
var root = {
    itinerary: getItinerary,
    itineraries: getItineraries,
    leg: getLeg,
    legs: getLegs
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
