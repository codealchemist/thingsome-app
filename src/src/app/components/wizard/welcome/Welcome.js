import React from 'react';
import SuccessButton from '../../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';
import CenteredCardActions from '../../card/CenteredCardActions.js'
import AvatarBert from '../../avatar/AvatarBert.js';

class Welcome extends React.Component {
  test() {
    console.log('-- Welcome props:', this.props);
  }

  render() {
    return (
      <Card style={{width: '400px', margin: '20px auto'}}>
        <AvatarBert />

        <CardMedia
          aspectRatio="wide"
          image="img/nodemcu.jpg"
        />

        <CardTitle
          title="Welcome to the Future!"
          subtitle="Thingsome is an amazing tool to make your home smarter!"
        />

        <CardText>
          We well help you setup your Thingsome devices. <br />
          Grab your Thingsome and get ready to have some fun! ;)
        </CardText>

        <CenteredCardActions>
          <SuccessButton onClick={this.props.next} style={{margin: 'auto'}} label="Let's start!" primary raised />
        </CenteredCardActions>
      </Card>
    )
  }
}

export default Welcome
