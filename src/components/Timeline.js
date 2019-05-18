import React, { Component } from "react";
import Store from '../lib/Store'

class Timeline extends Component {
  constructor() {
    super();
    console.log(Store);
  }
  render() {
    var seletedGif = Store.getState('selectedGif');
    debugger;
    return (
      <div>
        {seletedGif.map((item) => <img src={item.url}></img>)}
      </div>
    )
  }
}
export default Timeline;
