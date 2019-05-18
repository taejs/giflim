import React, { Component } from "react";
import Store from '../lib/Store'
import GifCard from '../components/GifCard'

import { Button, TextField, Grid, Paper } from "@material-ui/core";

class Timeline extends Component {
  constructor() {
    super();
    console.log(Store);
  }
  render() {
    var seletedGif = Store.getState('selectedGif') || [];
    debugger;
    return (
      <div>
        <Grid container spacing={24}>
        {seletedGif.map((item) => (
            <Grid item xs={4} key={item.id}>
            <Paper>
              <GifCard
                imgSrc={item.url}
                item={item}
                />
            </Paper>
          </Grid>
        ))}
        </Grid>
      </div>
    )
  }
}
export default Timeline;
