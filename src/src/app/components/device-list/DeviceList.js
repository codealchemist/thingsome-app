import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import Storage from '../storage/Storage.js';
import Info from '../info/Info.js';

class DeviceList extends React.Component {
  constructor() {
    super();

    this.storageId = 'devices';
    this.storage = new Storage();
    this.state = {
      currentView: 'default',
      currentDevice: {}
    };
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

  isEmpty() {
    if(this.getAll().length) return false;
    return true;
  }

  getDevicesHtml() {
    let devices = this.getAll()

    // no devices
    let devicesHtml
    if (!devices) {
      devicesHtml = '<h3>No devices yet.</h3>'
      return devicesHtml
    }

    // has devices
    devicesHtml = devices.map((device) => {
      return <ListItem
        key={device.id}
        avatar="/img/nodemcu.jpg"
        caption={device.name}
        legend={device.type}
        rightIcon="star"
        onClick={() => this.showDevice(device)} />
    })

    return devicesHtml
  }

  showDevice(device) {
    console.log('--- show device:', device);
    this.state.currentDevice = device;
    this.state.currentView = 'info';
    this.setState(this.state);
  }

  getDefaultView() {
    let devicesHtml = this.getDevicesHtml()

    return (
      <List selectable ripple>
        <ListSubHeader caption="Your Thingsome Devices" />
          {devicesHtml}
      </List>
    )
  }

  getViews() {
    return {
      default: this.getDefaultView(),
      info: <Info {...this.state.currentDevice}
        setDeviceName={(name) => this.setDeviceName(name)}
        prev={() => this.changeView('default')} />
    };
  }

  changeView(viewName) {
    this.state.currentView = viewName;
    this.setState(this.state);
  }

  setDeviceName(name) {
    this.state.currentDevice.name = name;
    this.setState(this.state);
    this.update(this.state.currentDevice);
  }


  getView(viewName) {
    let views = this.getViews();
    return views[viewName];
  }

  render() {
    return (
      this.getView(this.state.currentView)
    )
  }
}

export default DeviceList
