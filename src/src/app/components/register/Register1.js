import React from 'react';
import SuccessButton from '../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

class Register1 extends React.Component {
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
          title="Power on your Thingsome"
          subtitle="Let's give it some juice so it can came up to life!"
        />
        <CardText>
          Connect your Thingsome device to a power source.
        </CardText>
        <CardActions>
          <Button onClick={this.props.prev} style={{margin: 'auto'}} label="Prev" />
          <SuccessButton onClick={this.props.next} style={{margin: 'auto'}} label="Next" primary raised />
        </CardActions>
      </Card>
    )
  }
}

export default Register1;
