import React from "react";

class ConsoleTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: "",
      err: ""
    };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div></div>;
  }
}
export default ConsoleTest;
