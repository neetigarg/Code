
const request = require('request');

var getWeather = (lat,long,callback) =>{
request({url: `https://api.darksky.net/forecast/204ab46e4128cf9fe10e63f540cdfe5a/${lat},${long}`,
    json:true
    },(error,response,body) =>{
      if(!error && response.statusCode === 200){
            callback(undefined,{
               temperature: body.currently.temperature,
               apparentTemperature:body.currently.apparentTemperature});
      }else
          callback('Unable to connect to Forecast servers');
    });
};

module.exports.getWeather = getWeather;

