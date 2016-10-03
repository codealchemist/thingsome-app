import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

class DeviceList extends React.Component {
  test() {
    console.log('-- List props:', this.props);
  }

  render() {
    return (
      <List selectable ripple>
        <ListSubHeader caption="Your Thingsome Devices" />
        <ListItem
          avatar="https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg"
          caption='Bedroom light'
          legend="switch"
          rightIcon="star"
        />
        <ListItem
          avatar="https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg"
          caption="Hall light"
          legend="switch"
          rightIcon="star"
        />
        <ListItem
          avatar="https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg"
          caption="Living RGB led"
          legend="rgb-led"
          rightIcon="star"
        />
      </List>
    )
  }
}

export default DeviceList
