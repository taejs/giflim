import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button
} from "@material-ui/core";

export default class componentName extends Component {
  render() {
    return (
      <Card>
        <CardActionArea>
          {/* gif 이미지 영역 */}
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {/* 추가 아이콘 버튼 */}
            Share
          </Button>
        </CardActions>
      </Card>
    );
  }
}
