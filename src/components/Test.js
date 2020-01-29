import React from "react";
//import ReactDOM from "react-dom";
//import TimeDisplay from "./components/TimeDisplay";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 120,
      longitude: 40
    };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return (
      <div>
        <div>Latitude: {this.state.latitude}</div>
        <div>Longitude: {this.state.longitude}</div>
        <div></div>
      </div>
    );
  }
}
export default Test;
//ReactDOM.render(<Test />, document.querySelector("#root"));
