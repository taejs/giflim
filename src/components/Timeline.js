import React, { Component } from "react";
import Store from '../lib/Store'
import GifCard from '../components/GifCard'

import { Button, TextField, Grid, Paper } from "@material-ui/core";
import Store from "../lib/Store";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
