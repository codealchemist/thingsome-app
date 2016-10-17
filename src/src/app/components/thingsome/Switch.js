import React from 'react';
import {Switch as SwitchItem} from 'react-toolbox/lib/switch';
import Avatar from 'react-toolbox/lib/avatar';
import Chip from 'react-toolbox/lib/chip';
import { ListDivider } from 'react-toolbox/lib/list';
import { Button } from 'react-toolbox/lib/button';
import Thingsome from '../thingsome/Thingsome.js';
import '!style!css!sass!./Default.scss';

export default class Switch extends React.Component {
  constructor() {
    super();

    this.labelMap = {
      true: 'On',
      false: 'Off'
    };

    this.state = {
      switch1: false // default state
    };
  }

  componentDidMount() {
    this.thingsome = new Thingsome(this.props);
  }

  turn(field, state) {
    this.state[field] = state;
    this.setState(this.state);

    // communicate with thingsome
    this.thingsome.setSwitch(state);
  }

  render() {
    let label1 = this.labelMap[this.state.switch1];

    return (
      <div>
        <section>
          <Button onClick={this.props.prev} style={{margin: 'auto'}} label="Back" />

          <Chip>
            <Avatar title="S" />
            <span>{this.props.name}</span>
          </Chip>
        </section>

        <ListDivider />

        <section>
          <SwitchItem
            checked={this.state.switch1}
            label={label1}
            onChange={(state) => this.turn('switch1', state)}
          />
        </section>
      </div>
    );
  }
}
