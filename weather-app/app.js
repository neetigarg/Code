//  const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

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
// console.log(argv);
geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
  if(errorMessage){
    console.log(errorMessage);
  } else{
    // console.log(JSON.stringify(results, undefined, 2));
    console.log(`${results.address},${results.Country}`);
    weather.getWeather(results.Latitude,results.Longitude, (errorMesaage, WeatherResult) =>{
      if(errorMesaage){
        console.log(errorMesaage);
      }else
        console.log(`Current temperature ${WeatherResult.temperature}.It feels like ${WeatherResult.apparentTemperature}`);
    });    
  }
});
