import React, { Component } from "react";
import SearchGif from "./SearchGif";
import Timeline from "./Timeline";
import '../styles/WorkingPage.css'

class WorkingPage extends Component {
  render() {
    return (
      <div>
        <div className="search-gif">
          <SearchGif/>
        </div>
        <div className="timeline">
          <Timeline />
        </div>
      </div>
    );
  }
}
export default WorkingPage;
