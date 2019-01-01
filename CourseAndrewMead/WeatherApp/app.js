console.log("app is loading");

const weather = require("./weather");
const axios = require("axios");
const argv = require("yargs").argv;

const dev = require("./app_dev");
const LOCATION = argv.location; // ---- e.g. "1600 Pennsylvania Ave NW, Washington, DC 20500, USA";


const geo_url = `http://www.mapquestapi.com/geocoding/v1/address?key=${
  dev.mapquestapi_key
}&location=${LOCATION}`;

axios
  .get(geo_url)
  .then(response => {
    if (response.status === 200) {
      const { lat, lng } = response.data.results[0].locations[0].displayLatLng;
      weather.writeTemerature(lat, lng);
    } else {
      console.log("Error : can not retrive correct geolocation");
    }
  })
  .catch(err => console.log("Server Error : geolocation"));
