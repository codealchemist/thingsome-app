import React from 'react';
import SuccessButton from '../button/SuccessButton.js';    // A button with complex overrides
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Dialog from 'react-toolbox/lib/dialog';
import Overlay from '../overlay/Overlay.js';
import OverlayContent from '../overlay/OverlayContent.js';
import Thingsome from '../thingsome/Thingsome.js';
import QueryString from '../helpers/QueryString.js';

let thingsome = new Thingsome();

class Register3 extends React.Component {
  constructor() {
    super();

    this.state = {
      ssid: '',
      pass: '',
      isOverlayActive: false,
      dialogActive: false,
      dialogMessage: '',
      dialogTitle: ''
    };
  }

  dialogActions = [
    { label: "OK", onClick: () => this.hideDialog() }
  ]

  updateState(key, value) {
    this.state[key] = value;
    this.setState(this.state);
  }

  getIp(body) {
    return body.replace('ip=', '');
  }

  connect() {
    let ssid = this.state.ssid;
    let pass = this.state.pass;
    console.log(`connect to ${ssid}:${pass}`);

    this.showOverlay();
    thingsome.setup(this.state)
      .then(
        (response) => {
          console.log('--- setup response', response);
          this.hideOverlay();

          // error
          if (response.status !== 200) {
            this.showDialog({
              title: 'Unable to Connect', 
              message: 'Unable to connect to your WiFi network with the provided credentials. Please, double check they are OK.'
            });
            return;
          }

          // ok
          let body = response.text().then((body) => {
            console.log('--- BODY:', body);
            let data = new QueryString(body).toJson();
            console.log('--- data:', data);

            this.props.setDeviceIp({
              ip: data.ip
            });
            this.props.next();
          })
        },
        (error) => {
          console.log('--- setup error:', error);
          this.hideOverlay();
          this.showDialog({
            title: 'Connection Error', 
            message: 'Unable to connect. Is your Thingsome powered on? Are you connected to its access point?'
          });
        }
      )
  }

  showOverlay() {
    this.state.isOverlayActive = true;
    this.setState(this.state);
  }

  hideOverlay() {
    this.state.isOverlayActive = false;
    this.setState(this.state);
  }

  hideDialog() {
    this.state.dialogActive = false;
    this.setState(this.state);
  }

  showDialog({title, message}) {
    this.state.dialogActive = true;
    this.state.dialogTitle = title;
    this.state.dialogMessage = message;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <Dialog
          actions={this.dialogActions}
          active={this.state.dialogActive}
          onEscKeyDown={this.hideDialog}
          onOverlayClick={this.hideDialog}
          title={this.state.dialogTitle}
        >
          <p>{this.state.dialogMessage}</p>
        </Dialog>

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
          <Overlay active={this.state.isOverlayActive}>
            <OverlayContent>
              <ProgressBar type="circular" mode="indeterminate" />
            </OverlayContent>
            <CardTitle
              title="Setup your Thingsome"
              subtitle="A device connected to the Internet is more fun!"
            />
            <CardText>
              To connect your Thingsome to the Internet you need to tell it
              how to connect to your router.<br />
              Please, provide your WiFi credentials below:<br /><br />

              <Input
                type="text"
                label="SSID"
                name="ssid"
                value={this.state.ssid}
                maxLength={32}
                onChange={(value) => this.updateState("ssid", value)}
              />

              <Input
                type="text"
                label="PASS"
                name="pass"
                value={this.state.pass}
                maxLength={64}
                onChange={(value) => this.updateState("pass", value)}
              />
            </CardText>
            <CardActions>
              <Button onClick={this.props.prev} style={{margin: "auto"}} label="Prev" />
              <SuccessButton onClick={() => this.connect()} style={{margin: "auto"}} label="Connect" primary raised />
            </CardActions>
          </Overlay>
        </Card>
      </div>
    )
  }
}

export default Register3;
