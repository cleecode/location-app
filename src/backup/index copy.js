import React from "react";
import ReactDOM from "react-dom";
import ConsoleTest from "./components/ConsoleTest";

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
          <div>Latitude: {this.state.latitude}</div>
          <div>Longitude: {this.state.longitude}</div>
          <div>Timestamp: {this.state.timestamp}</div>
          <ConsoleTest />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
