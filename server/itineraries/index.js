// const data = require('./flights.json');
const fs = require('fs');
module.exports = {
  getItineraries :function  (request, response){

    let rawdata = fs.readFileSync('flights.json');
    let data = JSON.parse(rawdata);
    console.log(data.itineraries);
    response.send({"status": "success", "data": data.itineraries})
    // const { name, email, code } = request.body
    // console.log(request);
    // console.log(request.body.name);
    // console.log(request.body.email);
    // console.log(request.body.invite_code);
    // console.log(data);


    // axios.post('https://script.google.com/macros/s/AKfycbyezSdUQCrfN5PfSi8-rKIbGoSG46yQWUiziNj8Aw4IZNJe7_4J/exec', {
    //   name: request.body.name,
    //   email: request.body.email,
    //   invite_code: request.body.invite_code
    // })
    //   .then((res) => {
    //     console.log(`statusCode: ${response.statusCode}`);
    //     console.log(res);
    //     if (res.data.status == "success") {
    //       response.send({"status": "success", "message": res.data.message})
    //     } else
    //       response.send({"status": "error", "message": res.data.message})
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     response.send({"status": "error", "message": error})
    //   })

  }
};
