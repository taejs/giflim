import React, { Component } from "react";
import axios from "axios";

class SearchGif extends Component {
  constructor() {
    super();
    this.state = {
      gifData: []
    };
  }

  search(event) {
    let keyword = "";
    let url = keyword
      ? "https://gdg-webtech-hackathon-backend.firebaseapp.com/api/gif/search"
      : "https://gdg-webtech-hackathon-backend.firebaseapp.com/api/gif/random50";
    axios
      .get(url, {
        q: keyword
      })
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

  render() {
    var gifData = this.state.gifData;
    return (
      <div>
        <button onClick={this.search.bind(this)} />
        {gifData.map(function(item) {
          return <img src={item.url} />;
        })}
      </div>
    );
  }
}
export default SearchGif;
