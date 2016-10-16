import React from 'react';
import SuccessButton from '../../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import AvatarBert from '../../avatar/AvatarBert.js';

class Register4 extends React.Component {
  render() {
    return (
      <Card style={{width: '400px', margin: '20px auto'}}>
        <AvatarBert />

        <CardMedia
          aspectRatio="wide"
          image="/img/nodemcu.jpg"
        />

        <CardTitle
          title="YEAH! We're connected!"
          subtitle="Let's rock!"
        />

        <CardText>
          Your Thingsome is now connected to your WiFi network!<br />
          You might want to forward some ports on your router to access it from
          the outside world or use it in DMZ mode.<br /><br />

          Now, let's go to your list...
        </CardText>

        <CardActions>
          <Button onClick={this.props.prev} style={{margin: 'auto'}} label="Prev" />
          <SuccessButton onClick={this.props.next} style={{margin: 'auto'}} label="Next" primary raised />
        </CardActions>
      </Card>
    )
  }
}

export default Register4;
