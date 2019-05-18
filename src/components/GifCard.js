import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Icon
} from "@material-ui/core";
import "../styles/GifCard.css";
import Store from "../lib/Store";

export default class componentName extends Component {

  setStore(item) {
    Store.setState('selectedGif', item);
  }

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={this.props.imgSrc}
            height="140"
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions className="gif_card_action">
          <Icon color="primary" fontSize="large" className="gif_add_button" onClick={() => this.setStore(this.props.item)}>
            add_circle
          </Icon>
        </CardActions>
      </Card>
    );
  }
}
