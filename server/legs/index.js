const fs = require('fs');
let rawdata = fs.readFileSync('flights.json');
let data = JSON.parse(rawdata);

module.exports = {
  getLeg: function (request, response) {

    let leg = data.legs.filter(function (el) {
      return el.id == request.query.id
    })[0];
    if (leg != null) {
      response.send({"status": "success", "data": leg})
    }
    console.log(request.query.id);
  }
};
