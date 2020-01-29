import React from "react";
import "../assets/Display.css";

const positionConfig = {
  north: {
    text: "upper",
    iconName: "map"
  },
  south: {
    text: "lower",
    iconName: "map outline"
  },
  east: {
    text: "east",
    iconName: "map"
  },
  west: {
    text: "west",
    iconName: "map outline"
  }
};

const getClosestLatitude = latitude => {
  if (latitude) {
    return latitude > 0 ? "north" : "south";
  }
};

const getClosestLongitude = longitude => {
  if (longitude) {
    return longitude > 0 ? "east" : "west";
  }
};

const getTimestamp = timestamp => {
  if (timestamp) {
    timestamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(timestamp);
  }
  return timestamp;
};

const PositionDisplay = props => {
  const lat = getClosestLatitude(props.latitude);
  const long = getClosestLongitude(props.longitude);
  const ts = getTimestamp(props.timestamp);
  const { iconName } = positionConfig[(lat, long)];
  return (
    <div className="PositionDisplay">
      <div>
        <h1>Location</h1>
      </div>
      <div>
        {<i className={`icon-lat ${iconName} icon`} />}
        <b>north or south?</b> <table>{lat}</table>
      </div>
      <div>
        {<i className={`icon-long ${iconName} icon`} />}
        <b>east or west?</b> <table>{long}</table>
      </div>
      <div>--</div>
      <div>
        <h1>Time & Date</h1>
      </div>
      <div>
        <i className={`icon-time ${iconName} icon`} />
        <b>Timestamp</b> <table>{ts}</table>
      </div>
    </div>
  );
};

export default PositionDisplay;
