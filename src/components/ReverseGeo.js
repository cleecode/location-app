import React from "react";
import Geocode from "react-geocode";

const ReverseGeo = props => {
  console.log(props.latitude);
  // set Google Maps Geocoding API
  Geocode.setApiKey("bdc95a75c3mshd223176bf2eb65ap19e409jsn56d08c488ad1");

  // Set response language
  Geocode.setLanguage("en");

  // Enable logs
  Geocode.enableDebug();

  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    response => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    error => {
      console.error(error);
    }
  );
  return <div></div>;
};

export default ReverseGeo;
