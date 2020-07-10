import React, { Component } from 'react';

const GIF_URL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny&rating=PG'

export default class RandomGif extends Component {
  state = {
    url: 'https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif'
  }

  componentDidMount = async () => {
    const res = await fetch(GIF_URL);
    const json = await res.json();
    this.setState({
      url: await json.data.image_original_url
    });
  }

  render() {
    const { url } = this.state;
    return (
      <div>
        <img src={url} style={{
          width: '50%',
          height: 'auto'
        }} alt="random gif"/>
      </div>
    );
  }
}