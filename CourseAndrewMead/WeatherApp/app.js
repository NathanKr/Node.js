console.log("app is loading");

const axios = require("axios");
const argv = require("yargs").argv;

const dev = require("./app_dev");
const LOCATION = argv.location; // ---- e.g. "1600 Pennsylvania Ave NW, Washington, DC 20500, USA";

const far2Cel = temp_far => Math.round(((temp_far - 32) * 5) / 9);

const geo_url = `http://www.mapquestapi.com/geocoding/v1/address?key=${
  dev.mapquestapi_key
}&location=${LOCATION}`;

axios
  .get(geo_url)
  .then(response => {
    if (response.status === 200) {
      const { lat, lng } = response.data.results[0].locations[0].displayLatLng;
      const weather_url = `https://api.darksky.net/forecast/${
        dev.dark_ski_api_key
      }/${lat},${lng}`;

      axios
        .get(weather_url)
        .then(response => {
          if(response.status === 200){
            console.log(
                `temperature [c] : ${far2Cel(response.data.currently.temperature)}`
              );
          }
          else{
            console.log("Error : can not retrive correct weather");
          }
        })
        .catch(err => console.log("Server Error : weather"));
    } else {
      console.log("Error : can not retrive correct geolocation");
    }
  })
  .catch(err => console.log("Server Error : geolocation"));
