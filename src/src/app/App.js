import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import CustomAppBar from './AppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

let welcome = (
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
      <SuccessButton style={{margin: 'auto'}} label="Let's start!" primary raised />
    </CardActions>
  </Card>
)

const App = () => (
  <div>
    <CustomAppBar />
    {welcome}
  </div>
);

export default App;
