const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;
var encodedAddress = encodeURIComponent(argv.address);

var geocodeURL=`http://www.mapquestapi.com/geocoding/v1/address?key=0xH6hUbUtWZLpuTY2CugdfG5xZjHQ3AZ&location=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if(response.data.info.statuscode === 400){
        throw new Error('Unable to find the address');
    }
    var Lat = response.data.results[0].locations[0].latLng.lat;
    var Lng = response.data.results[0].locations[0].latLng.lng;
    var weatherURL = `https://api.darksky.net/forecast/204ab46e4128cf9fe10e63f540cdfe5a/${Lat},${Lng}`;
    console.log(response.data.results[0].locations[0].adminArea1);
    console.log(response.data.results[0].locations[0].adminArea3);
    return axios.get(weatherURL);
}).then((response) =>{
    var Temperature = convertCelsius(response.data.currently.temperature);
    var apparentTemperature=convertCelsius(response.data.currently.apparentTemperature);
    console.log(`It's currently ${Temperature} C. It feels like ${apparentTemperature} C`);
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    }else{
        console.log(e.message);
    }
});
    
const convertCelsius = (temp) => {
    return parseFloat(Math.round((temp - 32)* (5/9)));
};