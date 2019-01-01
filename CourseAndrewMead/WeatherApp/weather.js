const dev = require("./app_dev");
const axios = require("axios");
const far2Cel = temp_far => Math.round(((temp_far - 32) * 5) / 9);


const writeTemerature = (lat, lng) =>{
    const weather_url = `https://api.darksky.net/forecast/${
      dev.dark_ski_api_key
    }/${lat},${lng}`;
  
    axios
    .get(weather_url)
    .then(response => {
      if (response.status === 200) {
        console.log(
          `temperature [c] : ${far2Cel(
            response.data.currently.temperature
          )}`
        );
      } else {
        console.log("Error : can not retrive correct weather");
      }
    })
    .catch(err => console.log("Server Error : weather"));
  }

  module.exports.writeTemerature = writeTemerature;