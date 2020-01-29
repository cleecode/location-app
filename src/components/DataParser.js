import React, { Component } from "react";
import Papa from "papaparse";
import dataSet from "../datasets/countries.csv";

class DataParser extends Component {
  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.parseData();
  }

  parseData = () => {
    console.log("loading CSV");
    Papa.parse(dataSet, {
      download: true,
      header: true,
      step: function(row) {
        //console.log("Row:", row.data);
      },
      complete: this.updateData
    });
  };

  updateData(result) {
    const data = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({ data: data }); // or shorter ES syntax: this.setState({ data });
  }

  handleReadCSV = data => {
    console.log(data);
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleImportOffer = () => {
    this.fileInput.current.click();
  };

  render() {
    return (
      <div className="DataParser">
        <div>{this.data}</div>
      </div>
    );
  }
}

export default DataParser;
