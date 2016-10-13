import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import Header from '../header/Header.js';      // AppBar with simple overrides
import SuccessButton from '../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Welcome from '../welcome/Welcome.js';
import Register1 from '../register/Register1.js';
import Register2 from '../register/Register2.js';
import Register3 from '../register/Register3.js';
import Register4 from '../register/Register4.js';
import Info from '../info/Info.js';
import DeviceList from '../device-list/DeviceList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewSequence: ['welcome', 'register1', 'register2', 'info', 'register3', 'register4', 'deviceList'],
      currentViewIndex: 0,
      currentDevice: {}
    };

    this.deviceList = new DeviceList();
  }

  getViews() {
    return {
      welcome: <Welcome next={() => this.next()} prev={() => this.prev()} />,
      register1: <Register1 next={() => this.next()} prev={() => this.prev()} />,
      register2: <Register2 
        setCurrentDevice={(data) => this.setCurrentDevice(data)}
        next={() => this.next()}
        prev={() => this.prev()} />,
      info: <Info {...this.state.currentDevice}
        setDeviceName={(name) => this.setDeviceName(name)}
        next={() => this.next()}
        prev={() => this.prev()} />,
      register3: <Register3 
        setDeviceIp={(data) => this.setDeviceIp(data)}
        next={() => this.next()} 
        prev={() => this.prev()} />,
      register4: <Register4 next={() => this.next()} prev={() => this.prev()} />,
      deviceList: <DeviceList />
    };
  }

  setDeviceIp(data) {
    console.log('set device ip:', data);
    this.state.currentDevice.ip = data.ip;
    this.setState(this.state);

    this.deviceList.update(this.state.currentDevice);
  }

  setDeviceName(name) {
    console.log('set device name:', name);
    this.state.currentDevice.name = name;
    this.setState(this.state);

    this.deviceList.update(this.state.currentDevice);
  }

  setCurrentDevice(data) {
    console.log('set current device:', data);
    this.state.currentDevice = data;
    this.setState(this.state);

    // update existing device
    if (this.deviceList.exists(data.id)) {
      this.deviceList.update(data);
      return;
    }

    // add new device
    this.deviceList.add(data);
  }

  next() {
    console.log('app next');
    let totalViews = this.state.viewSequence.length;
    if (this.state.currentViewIndex === totalViews - 1) {
      console.log('no more views');
      return;
    }
    let nextViewIndex = ++this.state.currentViewIndex;
    this.setState({currentViewIndex: nextViewIndex});
  }

  prev() {
    console.log('app next');
    let totalViews = this.state.viewSequence.length;
    if (this.state.currentViewIndex === 0) {
      console.log('already on first view');
      return;
    }
    let prevViewIndex = --this.state.currentViewIndex;
    this.setState({currentViewIndex: prevViewIndex});
  }

  getView(viewIndex) {
    viewIndex = viewIndex || 0;
    let viewName = this.state.viewSequence[viewIndex];
    console.log('get view, name:', viewName);
    let views = this.getViews();
    return views[viewName];
  }

  render() {
    return (
      <div>
        <Header />
        {this.getView(this.state.currentViewIndex)}
      </div>
    )
  }
};

export default App;
