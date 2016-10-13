import React from 'react';
import SuccessButton from '../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Chip from 'react-toolbox/lib/chip';

class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      name: ''
    };
  }

  updateState(key, value) {
    this.state[key] = value;
    this.setState(this.state);
  }

  saveName() {
    // TODO: add validations
    console.log(`thingsome named as ${this.state.name}`);
    this.props.setDeviceName(this.state.name.trim());
    this.props.next();
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
          title="Your Thingsome"
          subtitle="Yay! We just spoke to your Thingsome device!"
        />
        <CardText>
          Your Thingsome just gave us some information about itself:<br /><br />

          <Chip>ID: {this.props.id}</Chip><br />
          <Chip>Type: {this.props.type}</Chip><br />
          <Chip>Name: {this.props.name}</Chip><br />
          <Chip>Description: {this.props.description}</Chip><br />
          <br />

          Let's give your Thingsome a name, so you can easily find it in your list:<br />
          <Input
            type='text'
            label='NAME'
            name='name'
            value={this.state.name}
            maxLength={32}
            onChange={(value) => this.updateState('name', value)}
          />
        </CardText>
        <CardActions>
          <Button onClick={this.props.prev} style={{margin: 'auto'}} label="Prev" />
          <SuccessButton onClick={() => this.saveName()} style={{margin: 'auto'}} label="Next" primary raised />
        </CardActions>
      </Card>
    )
  }
}

export default Info;
