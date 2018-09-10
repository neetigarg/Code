const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({url:`http://www.mapquestapi.com/geocoding/v1/address?key=0xH6hUbUtWZLpuTY2CugdfG5xZjHQ3AZ&location=${encodedAddress}`,
    json:true
    },(error,response,body) =>{
    // console.log(body);
                                                                          // console.log(JSON.stringify(error,undefined,2));
    if(error){
        callback('Unable to connect to server');
    }else if(body.info.statuscode === 400){
        callback('Unable to find the address');
    }else{
        callback(undefined, {
            address: body.results[0].locations[0].adminArea3,
            Country:body.results[0].locations[0].adminArea1,
            Longitude: body.results[0].locations[0].latLng.lng,
            Latitude: body.results[0].locations[0].latLng.lat
            });
        }
    });
};

module.exports = {
geocodeAddress
};