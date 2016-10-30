import React from 'react';
import SuccessButton from '../../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';
import CenteredCardActions from '../../card/CenteredCardActions.js'
import { Button } from 'react-toolbox/lib/button';
import Register2 from '../register/Register2.js';
import Register3 from '../register/Register3.js';
import Register4 from '../register/Register4.js';
import WizardInfo from '../info/WizardInfo.js';
import DeviceList from '../../device-list/DeviceList.js';
import ViewSequence from '../../view-sequence/ViewSequence.js';
import AvatarBert from '../../avatar/AvatarBert.js';

export default class Register1 extends ViewSequence {
  constructor() {
    super();

    this.state = {
      currentDevice: {},
      currentView: null
    };

    this.sequence = ['register1', 'register2', 'info', 'register3', 'register4', 'deviceList'];
    this.views = this.getViews();
    this.deviceList = new DeviceList();
  }

  getViews() {
    return {
      register1: this.getDefaultView(),
      register2: <Register2
        setCurrentDevice={(data) => this.setCurrentDevice(data)}
        next={() => this.next()}
        prev={() => this.prev()} />,
      info: <WizardInfo {...this.state.currentDevice}
        setDeviceName={(name) => this.setDeviceName(name)}
        next={() => this.next()}
        prev={() => this.prev()} />,
      register3: <Register3
        setDeviceIp={(data) => this.setDeviceIp(data)}
        next={() => this.next()}
        prev={() => this.prev()} />,
      register4: <Register4
        next={() => this.next()}
        prev={() => this.prev()} />,
      deviceList: <DeviceList />
    };
  }

  componentDidMount() {
    this.gotoIndex(0);
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

  getDefaultView() {
    return (
      <Card style={{width: '400px', margin: '20px auto'}}>
        <AvatarBert />

        <CardMedia
          aspectRatio="wide"
          image="img/nodemcu.jpg"
        />

        <CardTitle
          title="Power on your Thingsome"
          subtitle="Let's give it some juice so it can came up to life!"
        />

        <CardText>
          Connect your Thingsome device to a power source.
        </CardText>

        <CenteredCardActions>
          <Button onClick={() => this.props.prev()} style={{margin: 'auto'}} label="Prev" />
          <SuccessButton onClick={() => this.next()} style={{margin: 'auto'}} label="Next" primary raised />
        </CenteredCardActions>
      </Card>
    )
  }

  render() {
    return (
      this.state.currentView
    )
  }
}
