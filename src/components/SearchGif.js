import React, { Component } from "react";
import axios from "axios";
import { bindCallback } from "rxjs";
import { statement } from "@babel/template";
import { Button, TextField, Grid, Paper } from "@material-ui/core";
import "../styles/SearchGif.css";
import GifCard from "./GifCard";

class SearchGif extends Component {
  constructor() {
    super();
    this.state = {
      gifData: [],
      searchText: ""
    };
  }

  search(event) {
    let keyword = this.state.searchText;
    console.log(`keyword : ${keyword}`);
    let url = keyword
      ? `https://gdg-webtech-hackathon-backend.firebaseapp.com/api/gif/search?q=${keyword}`
      : "https://gdg-webtech-hackathon-backend.firebaseapp.com/api/gif/random50";
    axios
      .get(url, {})
      .then(response => {
        // handle success
        this.setState({
          gifData: response.data.data
        });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  setSearchText(event) {
    this.setState({
      searchText: event.target.value
    });
    console.log(`searchText : ${this.state.searchText}`);
  }

  render() {
    var gifData = this.state.gifData;
    return (
      <div>
        <section className="serach">
          <TextField
            className="input_gif_search"
            label="search yout GIF!"
            margin="normal"
            onChange={this.setSearchText.bind(this)}
            // onKeyDown={this.setSearchText(this)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.search.bind(this)}
            className="search_button"
          >
            Search
          </Button>
        </section>
        <Grid container spacing={24}>

          {gifData.map(function(item) {
          return (<Grid item xs={4}>
          <Paper>
            <GifCard
              imgSrc={item.url}
            />
          </Paper>
          </Grid>);
        })}
        </Grid>

        {/* {gifData.map(function(item) {
          return <img src={item.url} />;
        })} */}
      </div>
    );
  }
}
export default SearchGif;
