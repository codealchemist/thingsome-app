import React from 'react';
import SuccessButton from '../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

class Welcome extends React.Component {
  test() {
    console.log('-- Welcome props:', this.props);
  }

  render() {
    return (
      <Card style={{width: '400px', margin: '20px auto'}}>
        <CardTitle
          avatar="https://pbs.twimg.com/profile_images/378800000261610302/89cf1df7a56c30b8c3af41e9927a473f_bigger.jpeg"
          title="Alberto Miranda"
          subtitle="Co-Founder @thingsome"
        />
        <CardMedia
          aspectRatio="wide"
          image="https://o.lnwfile.com/_/o/_raw/t2/qe/ev.jpg"
        />
        <CardTitle
          title="Welcome to the Future!"
          subtitle="Thingsome is an amazing tool to make your home smarter!"
        />
        <CardText>
          We well help you setup your Thingsome devices. <br />
          Grab your Thingsome and get ready to have some fun! ;)
        </CardText>
        <CardActions>
          <SuccessButton onClick={this.props.next} style={{margin: 'auto'}} label="Let's start!" primary raised />
        </CardActions>
      </Card>
    )
  }
}

export default Welcome
