import React from 'react';
// import 'react-toolbox/lib/commons.scss';           // Import common styles
import Header from '../header/Header.js';      // AppBar with simple overrides
import SuccessButton from '../button/SuccessButton.js';    // A button with complex overrides
import Welcome from '../wizard/welcome/Welcome.js';
import Register1 from '../wizard/register/Register1.js';
import DeviceList from '../device-list/DeviceList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewSequence: ['welcome', 'register1', 'deviceList'],
      currentViewIndex: 0,
      currentDevice: {}
    };

    this.deviceList = new DeviceList();
  }

  getViews() {
    return {
      welcome: <Welcome next={() => this.next()} prev={() => this.prev()} />,
      register1: <Register1 next={() => this.next()} prev={() => this.prev()} />,
      deviceList: <DeviceList startWizard={() => this.startWizard()} />
    };
  }

  startWizard() {
    console.log('--- start wizard');
    this.state.currentViewIndex = 1;
    this.setState(this.state);
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
    console.log('app prev');
    let totalViews = this.state.viewSequence.length;
    if (this.state.currentViewIndex === 0) {
      console.log('already on first view');
      return;
    }
    let prevViewIndex = --this.state.currentViewIndex;
    this.setState({currentViewIndex: prevViewIndex});
  }

  getView(viewIndex) {
    let views = this.getViews();

    // TODO: handle new device setup after first setup

    // show view list if already setup at least one device
    if (viewIndex === 0 && !this.deviceList.isEmpty()) return views['deviceList'];

    // no devices setup, let's welcome the user
    // and guide him thru the first device setup
    viewIndex = viewIndex || 0;
    let viewName = this.state.viewSequence[viewIndex];
    console.log('get view, name:', viewName);
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
