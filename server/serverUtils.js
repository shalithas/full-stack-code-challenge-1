var fs = require('fs')
var fetch = require('node-fetch')

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

var fetchFromGql = async (query, variables) => {
    var res = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body: JSON.stringify({
        query,
        variables
        })
    })
    var json = await res.json()
    var data = await json.data;
    return data
}

module.exports = {
    getDataFromJson: readJsonFileSync,
    fetchFromGql
}