import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Storage from '../storage/Storage.js';

class DeviceList extends React.Component {
  constructor() {
    super();

    this.storageId = 'devices';
    this.storage = new Storage();
  }

  test() {
    console.log('-- List props:', this.props);
  }

  exists(deviceId) {
    if (this.get(deviceId)) return true;
    return false;
  }

  add(device) {
    let devices = this.getAll();
    devices.push(device);
    this.save(devices);
  }

  remove(deviceId) {
    let devices = this.getAll();
    let updatedDevices = devices.filter((device) => {
      if (device.id !== deviceId) return device;
    });

    this.save(updatedDevices);
  }

  update(device) {
    let devices = this.getAll();
    let updatedDevices = devices.map((currentDevice) => {
      if (currentDevice.id === device.id) return device;
      return currentDevice;
    });

    this.save(updatedDevices);
  }

  clear() {
    this.save([]);
  }

  save(devices) {
    this.storage.set(this.storageId, devices);
  }

  getAll() {
    return this.storage.get(this.storageId) || [];
  }

  get(deviceId) {
    let devices = this.getAll();
    let device = devices.find((device) => {
      if (device.id === deviceId) return device;
    });

    return device;
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
