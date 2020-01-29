import React from "react";
import ReactDOM from "react-dom";
import TestGeo from "./components/TestGeo";
import PositionDisplay from "./components/PositionDisplay";
//import ReverseGeo from "./components/ReverseGeo";
import DataParser from "./components/DataParser";
import NearestNumber from "./components/NearestNumber";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      timestamp: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidMount() {
    console.log("components rendered.");
  }

  componentDidUpdate() {
    console.log("components updated.");
  }

  render() {
    if (
      this.state.errorMessage &&
      !this.state.latitude &&
      !this.state.longitude
    ) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (
      !this.state.errorMessage &&
      this.state.latitude &&
      this.state.longitude
    ) {
      return (
        <div>
          <PositionDisplay
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            timestamp={this.state.timestamp}
          />
          <DataParser
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
          <TestGeo />
          <NearestNumber
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
