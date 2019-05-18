import React, { Component } from "react";
import Store from '../lib/Store';

class ResultPage extends Component {
    constructor() {
        super();
        this.state = {
            resultImgSrc : ''
        }; 
    }
    componentDidMount() {
        var seletedGif = Store.getState('selectedGif');
        debugger;
        window.gifshot.createGIF({
            gifWidth: 200,
            gifHeight: 200,
            images: seletedGif.map((item) => item.url),
            interval: 0.1,
            numFrames: 10,
            frameDuration: 1,
            fontWeight: 'normal',
            fontSize: '16px',
            fontFamily: 'sans-serif',
            fontColor: '#ffffff',
            textAlign: 'center',
            textBaseline: 'bottom',
            sampleInterval: 10,
            numWorkers: 2
        }, (obj) => {
            if (!obj.error) {
                this.setState({ resultImgSrc : obj.image });
                // var image = obj.image, animatedImage = document.createElement('img');
                // animatedImage.src = image;
                // document.body.appendChild(animatedImage);
            }
        });
    }
    render() {
        const src = this.state.resultImgSrc;
        return (<div>
                <img src={src}></img>
            </div>)
    }

}
export default ResultPage;