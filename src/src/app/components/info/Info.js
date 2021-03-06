import React from 'react';
import SuccessButton from '../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';
import CenteredCardActions from '../card/CenteredCardActions.js'
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Chip from 'react-toolbox/lib/chip';
import AvatarBert from '../avatar/AvatarBert.js';

export default class Info extends React.Component {
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
    this.props.prev();
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
          title="Your Thingsome"
          subtitle=""
        />

        <CardText>
          Details:<br /><br />

          <Chip>ID: {this.props.id}</Chip><br />
          <Chip>Type: {this.props.type}</Chip><br />
          <Chip>Name: {this.props.name}</Chip><br />
          <Chip>Description: {this.props.description}</Chip><br />
          <br />

          Change Thingsome name:<br />
          <Input
            type='text'
            label='NAME'
            name='name'
            value={this.state.name}
            maxLength={32}
            onChange={(value) => this.updateState('name', value)}
          />
        </CardText>
        <CenteredCardActions>
          <Button onClick={this.props.prev} style={{margin: 'auto'}} label="Prev" />
          <SuccessButton onClick={() => this.saveName()} style={{margin: 'auto'}} label="Save" primary raised />
        </CenteredCardActions>
      </Card>
    )
  }
}
