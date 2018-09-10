const request = require('request');

var geocodeAddress = (address) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var encodedAddress = encodeURIComponent(address);

            request({url:`http://www.mapquestapi.com/geocoding/v1/address?key=0xH6hUbUtWZLpuTY2CugdfG5xZjHQ3AZ&location=${encodedAddress}`,
            json:true
            },(error,response,body) =>{
            if(error){
                    reject('Unable to connect to server');
            }else if(body.info.statuscode === 400){
                    reject('Unable to find the address');
            }else{
                    resolve({
                        address: body.results[0].locations[0].adminArea3,
                        Country:body.results[0].locations[0].adminArea1,
                        Longitude: body.results[0].locations[0].latLng.lng,
                        Latitude: body.results[0].locations[0].latLng.lat
            });
        }
        });
    },1500);
});
};
geocodeAddress('247667').then((location)=>{
        console.log(JSON.stringify(location,undefined,2));
    },(errorMessage)=>{
        console.log(errorMessage);
})