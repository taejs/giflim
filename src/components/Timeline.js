import React, { Component } from "react";
import Store from "../lib/Store";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Timeline extends Component {
  constructor() {
    super();
    console.log(Store);
  }
  render() {
    var seletedGif = Store.getState("selectedGif");
    // debugger;
    return (
      <div>
        {seletedGif.map(item => (
          <img src={item.url} />
        ))}
        <Link to="/result">
        <Button variant="contained" color="primary">
          Submit
        </Button>
        </Link>
      </div>
    );
  }
}
export default Timeline;
