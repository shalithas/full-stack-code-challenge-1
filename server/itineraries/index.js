const fs = require('fs');
let rawdata = fs.readFileSync('flights.json');
let data = JSON.parse(rawdata);
module.exports = {
  getItineraries: function (request, response) {
    console.log(data.itineraries);
    response.send({"status": "success", "data": data.itineraries})
  }
};
