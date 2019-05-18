import React, { Component } from "react";
import SearchGif from "./SearchGif";
import Timeline from "./Timeline";

class WorkingPage extends Component {
  render() {
    return (
      <div>
        <SearchGif />
        <Timeline />
      </div>
    );
  }
}
export default WorkingPage;
