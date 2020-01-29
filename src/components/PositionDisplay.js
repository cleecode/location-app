import React from "react";

const getClosestLatitude = latitude => {
  if (latitude) {
    return latitude > 50
      ? latitude + " (lat over 50)"
      : latitude + " (lat under 50)";
  }
};

const getClosestLongitude = longitude => {
  if (longitude) {
    return longitude > 50
      ? longitude + " (long over 50)"
      : longitude + " (long under 50)";
  }
};

const getTimestamp = timestamp => {
  if (timestamp) {
    return (timestamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(timestamp));
  }
};

const PositionDisplay = props => {
  const lat = getClosestLatitude(props.latitude);
  const long = getClosestLongitude(props.longitude);
  const ts = getTimestamp(props.timestamp);
  return (
    <div>
      <div>Location</div>
      <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
      <div>--</div>
      <div>Time & Date</div>
      <div>Timestamp: {ts}</div>
    </div>
  );
};

export default PositionDisplay;
